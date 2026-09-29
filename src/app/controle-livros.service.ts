import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable()
export class ControleLivrosService {

  livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Angular na Prática', resumo: 'Um guia completo sobre Angular.', autores: ['João Silva', 'Maria Souza'] },
    { codigo: 2, codEditora: 2, titulo: 'TypeScript Essencial', resumo: 'Fundamentos de TypeScript para o dia a dia.', autores: ['Carlos Lima'] },
    { codigo: 3, codEditora: 3, titulo: 'Front-End Moderno', resumo: 'Boas práticas de desenvolvimento front-end.', autores: ['Ana Paula', 'Pedro Rocha'] }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maiorCodigo = this.livros.reduce((max, l) => l.codigo > max ? l.codigo : max, 0);
    livro.codigo = maiorCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(l => l.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}
