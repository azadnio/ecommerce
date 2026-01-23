import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-success',
  imports: [MatButton, MatIcon, RouterLink],
  preserveWhitespaces: true,
  template: `
    <div class="flex items-center justify-center h-[calc(100vh-64px)] py-6">
      <div class="flex flex-col items-center justify-center text-center bg-white rounded-xl shadow p-8 gap-6 max-w-sm">
        <mat-icon class="!text-green-500 !h-[56px] !w-[56px] !text-[56px]">check_circle</mat-icon>
        <h2 class="font-semibold text-green-600 text-2xl font-bold">Order successful!</h2>
        <p class="text-base">
          Thank you for your purchase! 
          Your order has been confirmed and will be shipped soon.</p>
        <p class="text-gray-600">
          You will receive an email confirmation shortly with the details of your order. and tracking information once your items have shipped.
        </p>
        <a matButton="filled" class="w-full max-w-xs mt-2" routerLink="/" color="primary">
          Continue Shopping
        </a>
      </div>
    </div>
  `,
  styles: ``
})
export default class OrderSuccess {

}
