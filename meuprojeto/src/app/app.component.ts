import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Daniel';

  adicionar() {
    console.log(`adicionando ${this.nome}`);

    const numero = Math.round(Math.random() * 100);
    this.nome = 'daniel' + numero;
  }
}
