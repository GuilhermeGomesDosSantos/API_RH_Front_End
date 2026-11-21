import { Component } from '@angular/core';
import { Colaborador } from '../../../models/colaborador';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { RouterLink } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';

@Component({
  imports: [MdbFormsModule, MdbRippleModule, FormsModule, MdbPopoverModule, RouterLink],
  selector: 'app-colaboradorlist',
  styleUrl: './colaboradorlist.component.scss',
  templateUrl: './colaboradorlist.component.html',
})
export class ColaboradorlistComponent {
  lista: Colaborador[] = [];

  constructor(){
    this.lista.push(new Colaborador(1, 'Guilherme Gomes dos Santos'));
    this.lista.push(new Colaborador(2, 'Zezinho Teste'));
  }

  deletar(){

  }

}
