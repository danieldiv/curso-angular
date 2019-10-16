import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioService } from '../funcionario.service';



@NgModule({
  declarations: [
    FuncionarioCardComponent,
    FuncionarioFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FuncionarioCardComponent,
    FuncionarioFormComponent
  ],
  providers: [
    FuncionarioService
  ]
})
export class FuncionarioModule { }
