import { Component, inject } from '@angular/core';
import { ViewPanal } from "../../../directives/view-panal";
import { MatIcon } from "@angular/material/icon";
import { EcommerceStore } from '../../../store/store';
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-tease-wishlist',
  imports: [ViewPanal, MatIcon, MatButton],
  template: `
  <div appViewPanal class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <mat-icon class="!text-red-500">favorite_border</mat-icon>
      <div>
        <h2 class="text-xl font-bold">Wishlist ({{ store.wishListCount() }})</h2>
        <p class="text-gray-500 text-sm">You have {{ store.wishListCount() }} items saved for later</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <button matButton="" routerLink="/wishlist">View Wishlist</button>
      <button matButton="filled" class="flex items-center gap-2" (click)="store.addAllWishListToCart()">
        <mat-icon>shopping_cart</mat-icon>
        Add All to Cart
      </button>
    </div>
  </div>
  `,
  styles: ``
})
export class TeaseWishlist {
  store = inject(EcommerceStore)
}
