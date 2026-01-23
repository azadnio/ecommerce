import { Component, inject, signal } from '@angular/core';
import { ViewPanal } from "../../../directives/view-panal";
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from '@angular/material/input';
import { OptionItem } from '../../../models/option-item';
import { MatOption, MatSelect } from "@angular/material/select";
import { EcommerceStore } from '../../../store/store';
import { MatButton } from '@angular/material/button';
import { AddReviewParams } from '../../../models/user-review';

@Component({
  selector: 'app-write-review',
  imports: [ViewPanal, ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatOption, MatSelect, MatButton],
  template: `
    <div appViewPanal>
      <h2 class="text-xl font-semibold mb-6">Write a Review</h2>
      <form [formGroup]="reviewForm" (ngSubmit)="saveReview()">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <mat-form-field>
            <mat-label>Review Title</mat-label>
            <input matInput formControlName="title" placeholder="Summerize your review" type="text"/>
          </mat-form-field>
          <mat-form-field>
            <mat-select formControlName="rating">
              @for(option of ratingOptions(); track option.value) {
                <mat-option [value]="option.value">{{ option.label }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
          <mat-form-field class="col-span-2">
            <mat-label>Review Comment</mat-label>
            <textarea matInput formControlName="comment" placeholder="Tell others about your experience with this product" rows="4"></textarea>
          </mat-form-field>
        </div>
        <div class="flex gap-4">
          <button matButton="filled" type="submit" [disabled]="store.loading()">
            {{ store.loading() ? 'Submitting...' : 'Submit Review' }}
          </button>
          <button matButton="outlined" type="button" (click)="store.hideWriteReview()" [disabled]="store.loading()">
            Cancel
          </button>
        </div>
      </form>
    </div>
  `,
  styles: ``,
  host: { 'class': 'block' }
})
export class WriteReview {

  fb = inject(NonNullableFormBuilder);
  store = inject(EcommerceStore);

  ratingOptions = signal<OptionItem[]>([
    {label: '5 Stars - Excellent', value: 5},
    {label: '4 Stars - Good', value: 4},
    {label: '3 Stars - Average', value: 3},
    {label: '2 Stars - Poor', value: 2},
    {label: '1 Star - Terrible', value: 1},
  ]);

  reviewForm = this.fb.group({
    rating: [5, Validators.required],
    title: ['', Validators.required],
    comment: ['', Validators.required],
  });

  saveReview() {
    if (this.reviewForm.valid) {
      const { rating, title, comment } = this.reviewForm.value;
      this.store.addReview({ rating, title, comment } as AddReviewParams);
    }
    else {
      this.reviewForm.markAllAsTouched();
    }
  }
}
