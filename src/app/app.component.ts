import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Component/header/header.component';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { CategoriesComponent } from './Component/categories/categories.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProductListComponent, CategoriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookstore1';
}
