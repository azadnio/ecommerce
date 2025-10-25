import { Component, computed, inject, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Product } from '../../models/product';
import { EcommerceStore } from '../../store/store';

@Component({
  selector: 'app-toggle-wishlist-button',
  imports: [MatIcon],
  template: `
    <button 
        class=" w-10 h-10 rounded-full !bg-white opacity-80 border-0 shadow-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg"
        matIconButton
        [class]="isIntheWhishList() ? '!text-red-500': '!text-gray-400'"
        (click)="toggleWhishList(product())"
      >
        <mat-icon> {{ isIntheWhishList() ? 'favorite' : 'favorite_border' }}</mat-icon>
    </button>
  `,
  styles: ``
})
export class ToggleWishlistButton {
  product = input.required<Product>();
  store = inject(EcommerceStore);
  isIntheWhishList = computed(() => this.store.wishListItems().find(p => p.id === this.product().id));

  toggleWhishList(product: Product) {
    this.isIntheWhishList() ? this.store.removeFromWishList(product) : this.store.addToWishList(product);
  }
}
