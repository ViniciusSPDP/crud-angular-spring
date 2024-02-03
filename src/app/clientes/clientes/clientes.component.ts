import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Clientes } from './../model/clientes';




@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatToolbarModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent implements OnInit {
  clientes: Clientes[] = [
    {_id: "1", name: "Vinicius", idade: 19}
  ];
  displayedColumns = ['name','idade'];

  constructor() {
  }

  ngOnInit():void {

  }
}
