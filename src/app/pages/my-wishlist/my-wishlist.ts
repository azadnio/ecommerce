import { Component, inject } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { EcommerceStore } from '../../store/store';
import { ProductCard } from '../../components/product-card/product-card';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from "@angular/material/button";
import { EmptyWishlist } from './empty-wishlist/empty-wishlist';

@Component({
  selector: 'app-my-wishlist',
  imports: [BackButton, ProductCard, MatIcon, MatButton, EmptyWishlist],
  template: `
    <div class="mx-auto max-w-[1200px] py-6 px-4">
      <app-back-button class="mb-6" navigateTo="/products/all">
        Continue shopping
      </app-back-button>

      @if(store.wishListCount()){
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold">My Wishlist</h2>
          <span class="text-gray-500 text-xl">{{ store.wishListCount() }} items </span>
        </div>

        <div class="responsive-grid">
          @for(prodcut of store.wishListItems(); track prodcut.id){
            <app-product-card [product]="prodcut">
              <button 
                  class="!absolute z-10 top-3 right-3 w-10 h-10 rounded-full !bg-white opacity-80 border-0 shadow-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg"
                  matIconButton
                  (click)="store.removeFromWishList(prodcut)"
                >
                  <mat-icon>delete</mat-icon>
              </button>
            </app-product-card>
          }
        </div>

        <div class="mt-8 flex justify-center">
          <button matButton="outlined" class="danger" (click)="store.clearWishList()">Clear Wishlist</button>
        </div>
      }
      @else {
        <app-empty-wishlist></app-empty-wishlist>
      }
    </div>
  `,
  standalone: true,
})
export default class MyWishlist {
  store = inject(EcommerceStore);
}
