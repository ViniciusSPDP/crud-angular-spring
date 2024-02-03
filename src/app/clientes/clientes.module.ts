import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



import { ClientesRoutingModule } from './clientes-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    AppMaterialModule,
  ]
})
export class ClientesModule { }
