import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatBadge } from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { EcommerceStore } from '../../store/store';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { SignInDialog } from '../../components/sign-in-dialog/sign-in-dialog';
import { SignUpDialog } from '../../components/sign-up-dialog/sign-up-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header-actions',
  imports: [
    MatIcon,
    MatButton,
    MatIconButton,
    RouterLink,
    MatBadge,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatDivider
  ],
  template: `
    <div class="flex items-center gap-2">
      <button matIconButton aria-label="Favorite" [matBadge]="store.wishListCount()" [matBadgeHidden]="!store.wishListCount()" routerLink="/wishlist">
        <mat-icon>favorite</mat-icon>
      </button>
      <button matIconButton aria-label="Shopping Cart" routerLink="/cart"
      [matBadge]="store.cartCount()" [matBadgeHidden]="!store.cartCount()"
      >
        <mat-icon>shopping_cart</mat-icon>
      </button>

      @if(store.user(); as user) {
        <button matIconButton aria-label="User Account" [matMenuTriggerFor]="userMenu">
          <img class="w-8 h-8 rounded-full" [src]="user.imageUrl" [alt]="user.name" />
        </button>
        <mat-menu #userMenu="matMenu" xPosition="before" yPosition="below">
          <div class="flex flex-col px-3 min-w-[200px]">
            <span class="font-medium text-sm">{{ user.name }}</span>
            <span class="text-xs text-gray-500">{{ user.email }}</span>
          </div>
          <mat-divider></mat-divider>
          <button class="!min-h-[32px]" mat-menu-item (click)="store.signOut()">
            <mat-icon>logout</mat-icon>
            Sign Out
          </button>
        </mat-menu>
      }
      @else {
        <button matButton="" (click)="openSignInDialog()" >Sign In</button>
        <button matButton="filled" (click)="openSignUpDialog()" >Sign Up</button>
      }
    </div>
  `,
  standalone: true,
})
export class HeaderActions {

  store = inject(EcommerceStore);
  dialog = inject(MatDialog);

  openSignInDialog() {
    this.dialog.open(SignInDialog, {
      disableClose: true
    });
  } 

  openSignUpDialog() {
    this.dialog.open(SignUpDialog, {
      disableClose: true
    });
  }
}
