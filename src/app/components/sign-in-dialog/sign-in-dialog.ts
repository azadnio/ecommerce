import { Component, inject, signal } from '@angular/core';
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatPrefix, MatSuffix } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { EcommerceStore } from '../../store/store';
import { SignInParams } from '../../models/user';
import { SignUpDialog } from '../sign-up-dialog/sign-up-dialog';

@Component({
  selector: 'app-sign-in-dialog',
  imports: [MatIconButton, MatIcon, MatFormField, MatInput, MatSuffix,MatPrefix, ReactiveFormsModule, MatDialogClose, MatButton],
  template: `
    <div class="p-6 max-w-[400px] flex flex-col">
      <div class="flex justify-between">
        <div>
          <h2 class="text-xl font-medium mb-1">Sign In</h2>
          <p class="text-sm text-gray-500">Sign in to your account to continue shopping</p>
        </div>
        <button aria-label="Close dialog" class="text-gray-400 hover:text-gray-600" tabindex="-1" matIconButton mat-dialog-close>
          <mat-icon>close</mat-icon>
        </button>
      </div>
      <form [formGroup]="signInForm" (ngSubmit)="submit()" class="mt-6">
        <mat-form-field class="w-full mb-4">
          <input matInput placeholder="Enter your email" formControlName="email" />
          <mat-icon matPrefix>email</mat-icon>
        </mat-form-field>
        <mat-form-field class="w-full mb-6">
          <input matInput [type]="passwordVisible() ? 'text' : 'password'" placeholder="Enter your password" formControlName="password" />
          <mat-icon matPrefix>lock</mat-icon>
          <button matIconButton matSuffix type="button" (click)="passwordVisible.set(!passwordVisible())" [attr.aria-label]="passwordVisible() ? 'Hide password' : 'Show password'">
            <mat-icon [fontIcon]="passwordVisible() ? 'visibility_off' : 'visibility'" ></mat-icon>
          </button>
        </mat-form-field>
        <button matButton="filled" class="w-full p-9" type="submit">
          Sign In
        </button>
      </form>
      <p class="text-sm text-gray-500 mt-2 text-center">Don't have an account? <a class="text-blue-600 cursor-pointer" (click)="openSignUpDialog()">Sign Up</a></p>
    </div>
  `,
  styles: ``
})
export class SignInDialog {

  fb = inject(NonNullableFormBuilder);
  store = inject(EcommerceStore);
  data = inject<{checkout: boolean}>(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef);
  dialog = inject(MatDialog);

  passwordVisible = signal(false);

  signInForm = this.fb.group({
    email: ['john@test.com', Validators.required],
    password: ['test123', Validators.required]
  });

  submit(){
    if(this.signInForm.valid){
      //perform sign in action
      const { email, password } = this.signInForm.value;
      this.store.signIn({ email: email!, password: password!, checkout: this.data?.checkout, dialogId: this.dialogRef.id } as SignInParams);
    }else{
      this.signInForm.markAllAsTouched();
    }
  }

  openSignUpDialog() {
    // Logic to open the sign-up dialog
    this.dialogRef.close();
    this.dialog.open(SignUpDialog, {
      disableClose: true,
      data: {
        checkout: this.data?.checkout,
      }
    });
  }
}
