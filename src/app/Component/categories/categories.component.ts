import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [MatMenuModule,],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  logout() {
    throw new Error('Method not implemented.');
  }

}
