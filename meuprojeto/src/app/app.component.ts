import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Daniel';
  adicionado = false;

  adicionar() {
    console.log(`adicionando ${this.nome}`);
    this.adicionado = true;
  }
}
