import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../../models/product';
import { RatingSummary } from "../rating-summary/rating-summary";
import { ViewPanal } from '../../../directives/view-panal';
import { ViewReviewitem } from "../view-reviewitem/view-reviewitem";
import { MatButton } from "@angular/material/button";
import { EcommerceStore } from '../../../store/store';
import { WriteReview } from "../write-review/write-review";

@Component({
  selector: 'app-view-review',
  imports: [RatingSummary, ViewPanal, ViewReviewitem, MatButton, WriteReview],
  template: `
  <div appViewPanal>
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold">Customer Reviews</h2>
      @if(store.user()) {
        <button matButton="filled" (click)="store.showWriteReview()">Write a Review</button>
      }
    </div>
    @if(store.writeReview()) {
      <app-write-review class="mb-6"/>
    }
    <app-rating-summary [product]="product()"/>
    <div class="flex flex-col gap-6">
      @for(review of sortedReviews(); track review.id) {
        <app-view-reviewitem [review]="review"/>
      }
    </div>
  </div>
  `,
  styles: ``,
})
export class ViewReview {
  store = inject(EcommerceStore);
  product = input.required<Product>();
  sortedReviews = computed(() => {
    return [...this.product().reviews].sort((a, b) => b.reviewDate.getTime() - a.reviewDate.getTime());
  });
}
