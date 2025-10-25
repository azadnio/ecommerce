import { Product } from "../models/product";
import { patchState, signalMethod, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { PRODUCTS } from "../sample.data";
import { computed, inject } from "@angular/core";
import { produce } from 'immer';
import { Toaster } from "../services/toaster";

export type EcommerceState = {
    products: Product[];
    category: string;
    wishListItems: Product[];
}

export const EcommerceStore = signalStore(
    {
        providedIn: 'root' //global store
    },
    withState({ //initial state
        products: PRODUCTS,
        category: 'all',
        wishListItems: []
    } as EcommerceState),
    withComputed(({ products, category, wishListItems }) => ({
        filteredProducts: computed(() => {
            if (category() === 'all') return products();
            return products().filter(p =>
                p.category.toLocaleLowerCase() === category().toLocaleLowerCase()
            )
        }),
        wishListCount: computed(()=> wishListItems().length )
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
            patchState(store, {wishListItems : []})
        }
    }))
);

