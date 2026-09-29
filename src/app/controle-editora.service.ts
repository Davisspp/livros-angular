import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable()
export class ControleEditoraService {

  editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Editora Alpha' },
    { codEditora: 2, nome: 'Editora Beta' },
    { codEditora: 3, nome: 'Editora Gama' }
  ];

  constructor() { }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const encontrada = this.editoras.filter(e => e.codEditora === codEditora);
    return encontrada.length > 0 ? encontrada[0].nome : '';
  }
}
