import { Component, computed, inject, input } from '@angular/core';
import { CartItem } from '../../models/cart';
import { QtySelector } from "../../components/qty-selector/qty-selector";
import { EcommerceStore } from '../../store/store';
import { MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-show-cart-item',
  imports: [QtySelector, MatIconButton, MatIcon],
  template: `
    <div class="grid grid-cols-3 grid-cols-[3fr_1fr_1fr]">
      <div class="flex items-center gap-4">
        <img [src]="item().product.imageUrl" alt="{{ item().product.name }}" class="w-24 h-24 object-cover rounded" [style.view-transition-name]="'product-image-' + item().product.id" />
        <div>
          <div class="text-gray-900 text-lg font-semibold">{{ item().product.name }}</div>
          <div class="text-gray-500 text-lg font-semibold">\${{ item().product.price }}</div>
        </div>
      </div>
      <app-qty-selector [quantity]="item().quantity" (quantityUpdated)="store.setItemQuantity({ product: item().product, quantity: $event })"/>
      <div class="flex flex-col items-end">
        <div class="text-right font-semibold text-lg">
          {{ total()}}
        </div>
        <div class="flex -me-3">
          <button matIconButton (click)="store.moveToWishList(item().product)">
            <mat-icon>favorite_border</mat-icon>
          </button>
          <button matIconButton class="danger" (click)="store.removeFromCart(item().product)">
            <mat-icon>delete</mat-icon>
          </button>
        </div>
      </div>
    </div>

  `,
  styles: ``
})
export class ShowCartItem {
  item = input.required<CartItem>()
  store = inject(EcommerceStore);
  total = computed(() => {
    return `$${(this.item().product.price * this.item().quantity).toFixed(2)}`;
  });
}
