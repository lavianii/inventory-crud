import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-produto-create',
  imports: [FormsModule, MatCardModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './produto-create.component.html',
  styleUrl: './produto-create.component.scss',
})
export class ProdutoCreateComponent {
  product: Produto = {
    name: '',
    price: null,
  };

  constructor(private productService: ProdutoService, private router: Router) {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.router.navigate(['/produtos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/produtos']);
  }
}
