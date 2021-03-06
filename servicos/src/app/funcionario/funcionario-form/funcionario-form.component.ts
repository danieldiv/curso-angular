import { Component, EventEmitter, Output } from '@angular/core';
import { FuncionarioService } from '../../funcionario.service';
import { LogService } from '../../log.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css'],
  providers: [FuncionarioService]
})
export class FuncionarioFormComponent {

  constructor(
    private funcionarioService: FuncionarioService,
    private logService: LogService
  ) { }

  adicionar(nome: string) {
    this.funcionarioService.adicionar(nome);
  }

}
