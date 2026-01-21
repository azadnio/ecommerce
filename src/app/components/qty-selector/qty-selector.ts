import { Component, input, output } from '@angular/core';
import { MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-qty-selector',
  imports: [MatIconButton, MatIcon],
  template: `
  <div class="flex items-center gap-3">
    <div class="inline-flex items-center">
      <button matIconButton aria-label="Increase Quantity" [disabled]="quantity() === 1" 
      (click)="quantityUpdated.emit(quantity() - 1)">
        <mat-icon>remove</mat-icon>
      </button>
      <span class="px-3">{{ quantity() }}</span>
      <button matIconButton aria-label="Decrease Quantity" 
      (click)="quantityUpdated.emit(quantity() + 1)">
        <mat-icon>add</mat-icon>
      </button>
    </div>
  </div>
  `,
  styles: ``
})
export class QtySelector {

  quantity = input.required<number>();
  quantityUpdated = output<number>();
}
