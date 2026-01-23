import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../models/product';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../store/store';
import { RouterLink } from '@angular/router';
import { StarRating } from "../star-rating/star-rating";

@Component({
  selector: 'app-product-card',
  imports: [MatButton, MatIcon, RouterLink, StarRating],
  template: `
    <div class="relative bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden flex flex-col h-full
      transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl
    ">
      <img 
        [src]="product().imageUrl" 
        class="w-full h-[300px] object-cover rounded-t-xl" 
        [routerLink]="['/product', product().id]" 
        alt="{{product().name}}"
        [style.view-transition-name]="'product-image-' + product().id"
      />
      <ng-content></ng-content>      
      <div class="p-5 flex flex-col flex-1">
        <h3 class="text-lg font-semibold text-gray-900 mb-2 leading-tight" [routerLink]="['/product', product().id]">
          {{product().name}}
        </h3>

        <p class="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">
          {{product().description}}
        </p>

        <app-star-rating [rating]="product().rating" class="mb-3">
          ({{product().reviewCount}})
        </app-star-rating>
  
        <div class="text-sm font-medium mb-4">
          {{product().inStock ? "In Stock": "Out of stock"}}
        </div>

        <div class="flex items-center justify-between mt-auto">
          <span class="text-2xl font-bold text-gray-900">\${{product().price}}</span>
          <button matButton="filled" class="flex items-center gap-2" (click)="store.addToCart(product())">
            <mat-icon>shopping_cart</mat-icon>
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
  store = inject(EcommerceStore);
}
