import { Product } from "../models/product";
import { patchState, signalMethod, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { PRODUCTS } from "../sample.data";
import { computed, inject } from "@angular/core";
import { produce } from 'immer';
import { Toaster } from "../services/toaster";
import { CartItem } from "../models/cart";

export type EcommerceState = {
    products: Product[];
    category: string;
    wishListItems: Product[];
    cartItems: CartItem[];
}

export const EcommerceStore = signalStore(
    {
        providedIn: 'root' //global store
    },
    withState({ //initial state
        products: PRODUCTS,
        category: 'all',
        wishListItems: [],
        cartItems: []
    } as EcommerceState),
    withComputed(({ products, category, wishListItems, cartItems }) => ({
        filteredProducts: computed(() => {
            if (category() === 'all') return products();
            return products().filter(p =>
                p.category.toLocaleLowerCase() === category().toLocaleLowerCase()
            )
        }),
        wishListCount: computed(() => wishListItems().length),
        cartCount: computed(() => cartItems().reduce((total, item) => total + item.quantity, 0))
    })),
    withMethods((store, toaster = inject(Toaster)) => ({
        setCategory: signalMethod<string>((category: string) => {
            patchState(store, { category })
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
        }
    }))
);

