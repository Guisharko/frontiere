import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauComponent } from './components/tableau/tableau.component';
import { TrimPipe } from './pipe/trim.pipe';



@NgModule({
  declarations: [TableauComponent, TrimPipe],
    exports: [
        TableauComponent,
        TrimPipe
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
