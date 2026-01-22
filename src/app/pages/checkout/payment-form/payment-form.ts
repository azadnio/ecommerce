import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatRadioGroup, MatRadioButton } from "@angular/material/radio";
import { ViewPanal } from '../../../directives/view-panal';

@Component({
  selector: 'app-payment-form',
  imports: [MatIcon, MatRadioGroup, ViewPanal, MatRadioButton],
  template: `
    <div appViewPanal>
      <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
        <mat-icon>payment</mat-icon>
        Payment Options
      </h2>
      <div>
        <mat-radio-group [value]="'stripe'">
          <mat-radio-button class="block mb-4" value="stripe">
            <img src="stripe.webp" alt="Stripe" class="h-10"/>
          </mat-radio-button>
        </mat-radio-group>
      </div>
    </div>
  `,
  styles: ``
})
export class PaymentForm {

}
