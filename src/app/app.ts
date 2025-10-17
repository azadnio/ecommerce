import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <app-header class="z-10 relative"></app-header>
    <main class="h-[calc(100% - 64px)] overflow-auto">
      <router-outlet />
    </main>
  `,
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected readonly title = signal('ecommerce');
}
