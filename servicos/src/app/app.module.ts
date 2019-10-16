import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioService, FuncionarioAbreviadoService } from './funcionario.service';

const criarFuncionarioService = () => {
  return new FuncionarioAbreviadoService(2);
};

// é o mesmo que o de cima
// function criarFuncionarioService2() {

// }

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    { provide: FuncionarioService, useFactory: criarFuncionarioService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
