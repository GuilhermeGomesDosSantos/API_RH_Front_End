import { Component } from '@angular/core';
import { Colaborador } from '../../models/colaborador';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-colaboradorlist',
  styleUrl: './colaboradorlist.component.scss',
  templateUrl: './colaboradorlist.component.html',
})
export class ColaboradorlistComponent {
  list: Colaborador[] = [];

  constructor(){
    let colaborador: Colaborador = new Colaborador();
    colaborador.id = 1;
    colaborador.nomeCompleto = "Guilherme Santos"
    colaborador.cargo = "Analista de Software Jr";
    colaborador.cargoConfianca = false;
    colaborador.cidade = "São Paulo";
    colaborador.idade = 20;
    colaborador.salario = 2000;
    colaborador.sexo = "Masculino";

    let colaborador2: Colaborador = new Colaborador();
    colaborador2.id = 1;
    colaborador2.nomeCompleto = "Fulano Teste"
    colaborador2.cargo = "Engenheiro de Software Sr";
    colaborador2.cargoConfianca = true;
    colaborador2.cidade = "Minas Gerais";
    colaborador2.idade = 34;
    colaborador2.salario = 15000;
    colaborador2.sexo = "Masculino";

    this.list.push(colaborador, colaborador2);
  }
}
