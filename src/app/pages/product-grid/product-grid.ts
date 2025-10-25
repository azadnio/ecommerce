import { Component, computed, inject, input, signal } from '@angular/core';
import { Product } from '../../models/product';
import { TitleCasePipe } from '@angular/common';
import { ProductCard } from '../../components/product-card/product-card';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList, MatListItem } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { EcommerceStore } from '../../store/store';
import { ToggleWishlistButton } from '../../components/toggle-wishlist-button/toggle-wishlist-button';

@Component({
  selector: 'app-product-grid',
  imports: [
    TitleCasePipe, 
    ProductCard, 
    MatSidenav, 
    MatSidenavContainer, 
    MatSidenavContent, 
    MatNavList, 
    MatListItem, 
    RouterLink,
    ToggleWishlistButton
  ],
  template: `
    <mat-sidenav-container>
      <mat-sidenav mode="side" opened>
        <div class="p-6">
          <h2 class="text-lg text-gray-900">Categories</h2>
          <mat-nav-list>
          @for(cat of categories(); track cat){
            <mat-list-item class="my-2" [activated]="cat === category()" [routerLink]="['/products', cat]">
              <span matListItemTitle class="font-medium" [class] = "cat === category() ? 'text-white': null">{{cat | titlecase}}</span>
            </mat-list-item>
          }
        </mat-nav-list>
        </div>
      </mat-sidenav>
      <mat-sidenav-content class="bg-gray-100 p-6 h-full">
        <h1 class="text-2xl font-bold text-gray-900 mb-1">{{category() | titlecase}}</h1>
          <p class="text-base text-gray-600 mb-6">
            {{store.filteredProducts().length}} products found
          </p>
        <div class="responsive-grid">
          @for(product of store.filteredProducts(); track product.id) {
            <app-product-card [product]="product">
              <app-toggle-wishlist-button [product]="product" class="!absolute z-10 top-3 right-3">
              </app-toggle-wishlist-button>
            </app-product-card>
          }
          @empty {  
            <p>
              No products available for the category: <b>{{category()}}</b>
            </p>
          }
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  standalone: true,
})
export default class ProductGrid {
  category = input<string>('all');
  store = inject(EcommerceStore);
  // products = signal<Product[]>();
  // filteredProducts = computed(() => {
  //   if (this.category() === 'all') return this.products();
  //   return this.products().filter(p =>
  //     p.category.toLocaleLowerCase() === this.category().toLocaleLowerCase()
  //   )
  // });
  categories = signal<string[]>(['all', 'Electronics', 'Clothing', 'Sports & Outdoors', 'Bags & Luggage', 'Home & Kitchen', 'Footwear'])

  constructor() {
    this.store.setCategory(this.category);
  }

}

