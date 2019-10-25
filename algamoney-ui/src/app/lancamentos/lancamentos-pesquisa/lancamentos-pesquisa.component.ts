import { Component, OnInit } from '@angular/core';
import { LancamentoService, LancamentoFilter } from '../lancamento.service';

import { LazyLoadEvent } from 'primeng/components/common/api';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFilter();
  lancamentos = [];

  constructor(private lancamentoService: LancamentoService) {}

  ngOnInit() {
    // this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.lancamentos = resultado.lancamentos;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  // pesquisar(pagina = 0) {
  //   this.filtro.pagina = pagina;

  //   this.lancamentoService.pesquisar(this.filtro)
  //     .then(resultado => {
  //       this.totalRegistros = resultado.total;
  //       this.lancamentos = resultado.lancamentos;
  //     });
  // }

  // aoMudarPagina(event: LazyLoadEvent) {
  //   const pagina = event.first / event.rows;
  //   this.pesquisar(pagina);
  //   console.log(event);
  // }

}
