import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatTableModule } from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    ReactiveFormsModule,
  ]
})
export class MaterialModule { }
