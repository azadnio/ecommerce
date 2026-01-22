import { Component, computed, inject } from '@angular/core';
import { ViewPanal } from "../../directives/view-panal";
import { EcommerceStore } from '../../store/store';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-summarize-order',
  imports: [ViewPanal, DecimalPipe],
  template: `
  <div appViewPanal class="">
    <h2 class="text-2xl font-bold mb-4">Order Summary</h2>

    <div class="space-y-2 border-b pb-4">
      <ng-content select="[checkoutItems]"/>      
    </div>

    <div class="space-y-3 text-lg  pt-4">
      <div class="flex justify-between">
        <span>Subtotal</span>
        <span>\${{ subTotal() | number:'1.2-2' }}</span>
      </div>
      <div class="flex justify-between">
        <span>Tax <small>(7%)</small></span>
        <span>\${{ tax() | number:'1.2-2' }}</span>
      </div>
      <div class="flex justify-between font-bold text-lg pt-3 border-t">
        <span>Total</span>
        <span>\${{ (subTotal() + tax()) | number:'1.2-2' }}</span>
      </div>
    </div>

    <ng-content select="[actionButtons]"/>
    
  </div>
  `,
  styles: ``
})
export class SummarizeOrder {
  store = inject(EcommerceStore);

  subTotal = computed(() => {
    return this.store.cartItems().reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  });

  tax = computed(() => {
    return this.subTotal() * 0.07; // assuming 7% tax
  });
}
