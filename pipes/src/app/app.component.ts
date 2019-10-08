import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome = 'Daniel Alves';
  dataAniversario = new Date(1997, 0, 29);
  preco = 12855.32;
  troco = 0.57392;
}
