import { Component, inject } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../store/store';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatPrefix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { SignInDialog } from '../sign-in-dialog/sign-in-dialog';
import { SignUpParams } from '../../models/user';

@Component({
  selector: 'app-sign-up-dialog',
  imports: [
    MatIconButton,
    MatIcon,
    MatDialogClose,
    ReactiveFormsModule,
    MatFormField,
    MatPrefix,
    MatInput,
    MatButton
  ],
  template: `
    <div class="p-8 min-w-[400px] flex flex-col">
      <div class="flex justify-between">
        <div>          
          <h2 class="text-xl font-medium mb-1">Sign Up</h2>
          <p class="text-sm text-gray-500">Join us and start shopping today</p>
        </div>
        <button aria-label="Close dialog" class="text-gray-400 hover:text-gray-600" tabindex="-1" matIconButton mat-dialog-close>
          <mat-icon>close</mat-icon>
        </button>
      </div>
      <form [formGroup]="signUpForm" (ngSubmit)="signUp()" class="mt-6 flex flex-col">
        <mat-form-field class="w-full mb-4">
          <input matInput type="text" placeholder="Enter your name" formControlName="name" />
          <mat-icon matPrefix>person</mat-icon>
        </mat-form-field>
        <mat-form-field class="w-full mb-4">
          <input matInput type="email" placeholder="Enter your email" formControlName="email" />
          <mat-icon matPrefix>email</mat-icon>
        </mat-form-field>
        <mat-form-field class="w-full mb-4">
          <input matInput type="password" placeholder="Enter your password" formControlName="password" />
          <mat-icon matPrefix>lock</mat-icon>
        </mat-form-field>
        <mat-form-field class="w-full mb-6">
          <input matInput type="password" placeholder="Confirm your password" formControlName="confirmPassword" />
          <mat-icon matPrefix>lock</mat-icon>
        </mat-form-field>
        <button matButton="filled" class="w-full" type="submit" >
          Create Account
        </button>
        <p class="text-sm text-gray-500 mt-4 text-center">
          Already have an account?
          <a class="text-blue-600 cursor-pointer" (click)="openSignInDialog()" >Sign In</a>
        </p>
      </form>
    </div>
  `,
  styles: ``
})
export class SignUpDialog {

  fb = inject(NonNullableFormBuilder);
  store = inject(EcommerceStore);
  data = inject<{checkout: boolean}>(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef);
  dialog = inject(MatDialog);

  signUpForm = this.fb.group({
    name: ['John Doe', Validators.required],
    email: ['joh@test.com', Validators.required],
    password: ['test123', Validators.required],
    confirmPassword: ['test123', Validators.required],
  });

  signUp() {
    if (this.signUpForm.valid) {
      const { name, email, password } = this.signUpForm.value;
      this.store.signUp({ name, email, password, checkout: this.data?.checkout, dialogId: this.dialogRef.id } as SignUpParams);
    }
    else {
      //show some error
      this.signUpForm.markAllAsTouched();
    }
  }

  openSignInDialog() {
    // Logic to open the sign-in dialog
    this.dialog.open(SignInDialog, {
      disableClose: true,
      data: {
        checkout: this.data?.checkout,
      }
    });
    this.dialogRef.close();
  }
}
