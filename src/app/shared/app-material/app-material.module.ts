import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  exports: [MatCardModule, MatTableModule, CommonModule],
})
export class AppMaterialModule { }
