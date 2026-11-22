import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { Colaborador } from '../../../models/colaborador';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  imports: [MdbFormsModule, MdbRippleModule, FormsModule],
  selector: 'app-colaboradordetails',
  styleUrl: './colaboradordetails.component.scss',
  templateUrl: './colaboradordetails.component.html',
})
export class ColaboradordetailsComponent {
  
  colaborador: Colaborador = new Colaborador(0, "");

  router = inject(ActivatedRoute);
  router2 = inject(Router);

  constructor(){
    let id = this.router.snapshot.params['id'];
    if(id > 0){
      this.findById(id);
    }
  }

  findById(id: number){
    let colaboradorRetornado = new Colaborador(id, "Fulano TESTE")
    this.colaborador = colaboradorRetornado;
  }

  save(){
    if(this.colaborador.id > 0){
      Swal.fire({
        title: 'Sucesso!',
        text: 'Editado com sucesso!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });

    // alert('Editado com sucesso!');
    this.router2.navigate(['admin/colaboradores'], {state: {colaboradorEditado: this.colaborador}})
  } else {
    Swal.fire({
        title: 'Sucesso!',
        text: 'Salvo com sucesso!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    // alert('Salvo com sucesso!');
    this.router2.navigate(['admin/colaboradores'], {state: {colaboradorNovo: this.colaborador}})
  }
}
}
