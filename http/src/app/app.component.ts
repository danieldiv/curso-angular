import { Component, OnInit } from '@angular/core';
import { CidadeService } from './cidade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cidades = [];

  constructor(private cidadeService: CidadeService) {}

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.cidadeService.consultar()
      .then(dados => {
        this.cidades = dados;
    });
  }

  adicionar(nome: string) {
    this.cidadeService.adicionar({ nome })
      .then(cidade => {
        alert(`Cidade ${cidade.nome} adicionado com codigo ${cidade.id}!`);
        this.consultar();
      });

  }

  // adicionar(nome: string) {
  //   this.cidadeService.adicionar({ nome: nome });
  //   alert(nome);
  // }

  // adicionar(n: string) {
  //   this.cidadeService.adicionar({ nome: n });
  //   alert(nome);
  // }

  excluir(id: number) {
    alert(id);
  }

  atualizar(cidade: any) {
    alert(JSON.stringify(cidade));
  }
}
