import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';
import { MatTableModule } from '@angular/material/table';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-produto-read',
  imports: [MatTableModule, RouterLink, RouterOutlet],
  templateUrl: './produto-read.component.html',
  styleUrl: './produto-read.component.scss',
})
export class ProdutoReadComponent implements OnInit {
  products: Produto[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProdutoService) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
    });
  }
}
