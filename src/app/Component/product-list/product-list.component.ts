import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    { name: 'Sản phẩm 1', price: 100 },
    { name: 'Sản phẩm 2', price: 200 },
    { name: 'Sản phẩm 3', price: 300 },
    // Thêm các sản phẩm khác tùy theo nhu cầu của bạn
  ];

}
