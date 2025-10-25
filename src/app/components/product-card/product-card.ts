import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../models/product';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../store/store';

@Component({
  selector: 'app-product-card',
  imports: [MatButton, MatIcon],
  template: `
    <div class="relative bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
      <img [src]="product().imageUrl" class="w-full h-[300px] object-cover rounded-t-xl">
      <ng-content></ng-content>      
      <div class="p-5 flex flex-col flex-1">
        <h3 class="text-lg font-semibold text-gray-900 mb-2 leading-tight">
          {{product().name}}
        </h3>

        <p class="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">
          {{product().description}}
        </p>

        <!-- add rating component -->
        <div class="text-sm font-medium mb-4">
        {{product().inStock ? "In Stock": "Out of stock"}}
        </div>

        <div class="flex items-center justify-between mt-auto">
          <span class="text-2xl font-bold text-gray-900">\${{product().price}}</span>
          <button matButton="filled" class="flex items-center gap-2">
            <mat-icon>shoping_cart</mat-icon>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class ProductCard {
  product = input.required<Product>();
  
}
