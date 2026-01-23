import { Component, computed, inject, input } from '@angular/core';
import { EcommerceStore } from '../../store/store';
import { BackButton } from "../../components/back-button/back-button";
import { ProductInfo } from "./product-info/product-info";
import { ViewReview } from './view-review/view-review';

@Component({
  selector: 'app-view-product-detail',
  imports: [BackButton, ProductInfo, ViewReview],
  template: `
    <div class="mx-auto max-w-[1200px] py-6">
      <app-back-button [navigateTo]="backRoute()">
        Continue Shopping
      </app-back-button>
      @if(store.selectedProduct(); as product){
        <div class="flex gap-8 mb-8 mt-4">
          <img 
            [src]="product.imageUrl" 
            [alt]="product.name" 
            class="w-[500px] h-[550px] object-cover rounded-lg" 
            [style.view-transition-name]="'product-image-' + product.id"
          />
          <div class="flex-1">
            <app-product-info [product]="product"/>
          </div>
        </div>
        <app-view-review [product]="product"/>
      }
    </div>
  `,
  styles: ``,
})
export default class ViewProductDetail {

  store = inject(EcommerceStore);
  productId = input.required<string>();

  constructor() {
    this.store.setProductId(this.productId);
  }

  backRoute = computed(() => `/products/${this.store.category()}`);
}
