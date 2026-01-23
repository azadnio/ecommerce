import { Product } from "../models/product";
import { patchState, signalMethod, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { PRODUCTS } from "../sample.data";
import { computed, inject } from "@angular/core";
import { produce } from 'immer';
import { Toaster } from "../services/toaster";
import { CartItem } from "../models/cart";
import { MatDialog } from "@angular/material/dialog";
import { SignInDialog } from "../components/sign-in-dialog/sign-in-dialog";
import { SignInParams, SignUpParams, User } from "../models/user";
import { Router } from "@angular/router";
import { Order } from "../models/order";

export type EcommerceState = {
    products: Product[];
    category: string;
    wishListItems: Product[];
    cartItems: CartItem[];
    user: User | undefined;
    loading: boolean;
    selectedProductId: string | undefined;
}

export const EcommerceStore = signalStore(
    {
        providedIn: 'root' //global store
    },
    withState({ //initial state
        products: PRODUCTS,
        category: 'all',
        wishListItems: [],
        cartItems: [],
        user: undefined,
        loading: false,
        selectedProductId: undefined
    } as EcommerceState),
    withComputed(({ products, category, wishListItems, cartItems, selectedProductId }) => ({
        filteredProducts: computed(() => {
            if (category() === 'all') return products();
            return products().filter(p =>
                p.category.toLocaleLowerCase() === category().toLocaleLowerCase()
            )
        }),
        wishListCount: computed(() => wishListItems().length),
        cartCount: computed(() => cartItems().reduce((total, item) => total + item.quantity, 0)),
        selectedProduct: computed(() => products().find(p => p.id === selectedProductId())),
    })),
    withMethods((store, toaster = inject(Toaster), matDialog = inject(MatDialog), router = inject(Router)) => ({
        setCategory: signalMethod<string>((category: string) => {
            patchState(store, { category })
        }),
        setProductId: signalMethod<string | undefined>((productId: string | undefined) => {
            patchState(store, { selectedProductId: productId })
        }),
        addToWishList: (product: Product) => {
            const updatedWishList = produce(store.wishListItems(), (draft) => {
                if (!draft.find(p => p.id === product.id)) {
                    draft.push(product);
                }
            });
            patchState(store, { wishListItems: updatedWishList });
            toaster.sucess('Product added to whishlist!!!');
        },
        removeFromWishList: (product: Product) => {
            patchState(store, {
                wishListItems: store.wishListItems().filter(p => p.id !== product.id)
            });
            toaster.sucess('Product removed from whishlist')
        },
        clearWishList: () => {
            patchState(store, { wishListItems: [] })
        },

        addToCart: (product: Product, quantity: number = 1) => {

            const existingItemIndex = store.cartItems().findIndex(item => item.product.id === product.id);

            const updatedCartItems = produce(store.cartItems(), (draft) => {
                if (existingItemIndex !== -1) {
                    draft[existingItemIndex].quantity += quantity;
                } else {
                    draft.push({ product, quantity });
                }
            });

            patchState(store, { cartItems: updatedCartItems });
            toaster.sucess(existingItemIndex !== -1 ? 'Product added again' : 'Product added to cart');
        },

        setItemQuantity: ({ product, quantity }: { product: Product, quantity: number }) => {

            const index = store.cartItems().findIndex(item => item.product.id === product.id);
            const updatedCartItems = produce(store.cartItems(), (draft) => {
                if (index !== -1) {
                    draft[index].quantity = quantity;
                }
            });

            patchState(store, { cartItems: updatedCartItems });
        },

        addAllWishListToCart: () => {
            const updatedCartItems = produce(store.cartItems(), (draft) => {
                store.wishListItems().forEach(wishListProduct => {
                    if (!draft.find(item => item.product.id === wishListProduct.id)) {
                        draft.push({ product: wishListProduct, quantity: 1 });
                    }
                });
            });
            patchState(store, { cartItems: updatedCartItems, wishListItems: [] });
        },

        moveToWishList: (product: Product) => {
            const updatedCartItems = store.cartItems().filter(item => item.product.id !== product.id);
            const updatedWishList = produce(store.wishListItems(), (draft) => {
                if (!draft.find(p => p.id === product.id)) {
                    draft.push(product);
                }
            });
            patchState(store, { cartItems: updatedCartItems, wishListItems: updatedWishList });
        },

        removeFromCart: (product: Product) => {
            patchState(store, {
                cartItems: store.cartItems().filter(item => item.product.id !== product.id)
            });
            toaster.sucess('Product removed from cart')
        },

        proceedToCheckout: () => {

            if (!store.user()) {
                matDialog.open(SignInDialog, {
                    disableClose: true,
                    data: {
                        checkout: true,
                    }
                });
            } else {
                router.navigate(['/checkout']);
            }
        },

        placeOrder: async() => {

            if(!store.user()){
                toaster.error('Please sign in to place the order');
                return;
            }

            if (store.cartItems().length === 0) {
                toaster.error('Your cart is empty!');
                return;
            }

            patchState(store, { loading: true });

            const order: Order = {
                id: Math.random().toString(36).substring(2, 9),
                userId: store.user()!.id,
                total: store.cartItems().reduce((total, item) => total + item.product.price * item.quantity, 0),
                items: store.cartItems(),
                paymentStatus: 'success'
            };

            await new Promise(resolve => setTimeout(resolve, 2000));

            patchState(store, { cartItems: [], loading: false });
            router.navigate(['/order-success'], { state: { order } });
        },

        signIn: ({ email, password, checkout, dialogId }: SignInParams) => {

            const dummyUser: User = {
                id: '1',
                name: 'John Doe',
                email: email,
                imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
            };
            patchState(store, { user: dummyUser });

            matDialog.getDialogById(dialogId)?.close();

            if (checkout) {
                router.navigate(['/checkout']);
            }
        },

        signOut: () => {
            patchState(store, { user: undefined });
            router.navigate(['/products/all']);
            toaster.sucess('You have been signed out successfully');
        },

        signUp: ({ name, email, password, checkout, dialogId }: SignUpParams) => {

            const dummyUser: User = {
                id: '1',
                name: name,
                email: email,
                imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
            };
            patchState(store, { user: dummyUser });
            matDialog.getDialogById(dialogId)?.close();

            if (checkout) {
                router.navigate(['/checkout']);
            }
            toaster.sucess('Account created successfully!');
        }
    }))
);

