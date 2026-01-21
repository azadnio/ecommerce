import { Component, inject } from '@angular/core';
import { ViewPanal } from "../../../directives/view-panal";
import { EcommerceStore } from '../../../store/store';
import { ShowCartItem } from '../../show-cart-item/show-cart-item';

@Component({
  selector: 'app-list-cart-items',
  imports: [ViewPanal, ShowCartItem],
  template: `
    <div appViewPanal>
      <h2 class="text-2xl font-bold mb-4">Cart Items {{ store.cartCount()}}</h2>
      <div class="flex flex-col gap-6">
        @for(item of store.cartItems(); track item.product.id){
          <app-show-cart-item [item]="item"></app-show-cart-item>        
        }
      </div>
    </div>
  `,
  styles: ``
})
export class ListCartItems {
  store = inject(EcommerceStore)
}
