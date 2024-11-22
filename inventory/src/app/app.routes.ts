import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProdutoCrudComponent } from './components/produto-crud/produto-crud.component';
import { ProdutoCreateComponent } from './components/produto-api/produto-create/produto-create.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'produtos',
    component: ProdutoCrudComponent,
  },
  {
    path: 'produtos/create',
    component: ProdutoCreateComponent
  }
];
