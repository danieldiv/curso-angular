import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  // styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card-body {
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FuncionarioCardComponent {

  @Input() funcionario: any;

  // getClassesCss() {
  //   return ['badge', 'badge-secondary'];
  // }

  isAdmin() {
    console.log(this.funcionario.nome.startsWith('T'));
    
    return this.funcionario.nome.startsWith('T');
  }

  getEstilosCartao() {
    return {
      'border-width.px': this.funcionario.id,
      backgroundColor: this.funcionario.id % 2 === 0 
        ? 'lightblue' : 'lightgreen'
    };
  }
}
