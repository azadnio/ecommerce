import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products/all',
  },
  {
    path: 'products/:category',
    loadComponent: () => import('./pages/product-grid/product-grid'),
  },
  {
    path: 'product/:productId',
    loadComponent: () => import('./pages/view-product-detail/view-product-detail'),
  },
  {
    path: 'wishlist',
    loadComponent: () => import('./pages/my-wishlist/my-wishlist'),
    title: 'My Wishlist',
  },
  {
    path: 'cart',
    // loadComponent: () => import('./pages/cart/cart'),
    loadComponent: () => import('./pages/view-cart/view-cart'),
    title: 'My Cart',
  },
  {
    path: 'checkout',
    loadComponent: () => import('./pages/checkout/checkout'),
    title: 'Checkout',
  },
  {
    path: 'order-success',
    loadComponent: () => import('./pages/order-success/order-success'),
    title: 'Order Success',
  }
];
