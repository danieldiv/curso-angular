import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { BotoesModule } from '../botoes/botoes.module';
import { LinhaComponent } from './linha/linha.component';



@NgModule({
  declarations: [MenuComponent, LinhaComponent],
  exports: [MenuComponent, BotoesModule],
  imports: [
    CommonModule,
    BotoesModule
  ]
})
export class NavegacaoModule { }
