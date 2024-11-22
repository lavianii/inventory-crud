import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-produto-crud',
  imports: [MatButtonModule],
  templateUrl: './produto-crud.component.html',
  styleUrl: './produto-crud.component.scss'
})
export class ProdutoCrudComponent {


  constructor(private router: Router) {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/produtos/create'])
  }

}
