import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full',redirectTo: 'clientes'
  },
  
  {
  path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
  }
];
