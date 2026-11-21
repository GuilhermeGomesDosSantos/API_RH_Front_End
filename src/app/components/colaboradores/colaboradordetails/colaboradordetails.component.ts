import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { Colaborador } from '../../../models/colaborador';

@Component({
  imports: [MdbFormsModule, MdbRippleModule, FormsModule],
  selector: 'app-colaboradordetails',
  styleUrl: './colaboradordetails.component.scss',
  templateUrl: './colaboradordetails.component.html',
})
export class ColaboradordetailsComponent {
  
  colaborador: Colaborador = new Colaborador(0, "");

  save(){
    alert('Salvo com sucesso!');
  }
}
