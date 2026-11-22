import { Component } from '@angular/core';
import { Colaborador } from '../../../models/colaborador';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { RouterLink } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import Swal from 'sweetalert2';
@Component({
  imports: [MdbFormsModule, MdbRippleModule, FormsModule, MdbPopoverModule, RouterLink],
  selector: 'app-colaboradorlist',
  styleUrl: './colaboradorlist.component.scss',
  templateUrl: './colaboradorlist.component.html',
})
export class ColaboradorlistComponent {
  lista: Colaborador[] = [];

  constructor() {


    this.lista.push(new Colaborador(1, 'Guilherme Gomes dos Santos'));
    this.lista.push(new Colaborador(2, 'Zezinho Teste'));

    let colaboradorNovo = history.state.colaboradorNovo;
    let colaboradorEditado = history.state.colaboradorEditado;

    if (colaboradorEditado) {
      let indice = this.lista.findIndex(x => {
        return x.id == colaboradorEditado.id
      });
      this.lista[indice] = colaboradorEditado;
    }

    if (colaboradorNovo) {
      colaboradorNovo.id = 123;
      this.lista.push(colaboradorNovo);
    }
  }

  deleteById(colaborador: Colaborador) {
    Swal.fire({
      title: 'Tem certeza que deseja deletar este registro ?',
      icon: 'warning',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não"
    }).then((result) => {
      if (result.isConfirmed) {
        let indice = this.lista.findIndex(x => { return x.id == colaborador.id });
        this.lista.splice(indice, 1);

        Swal.fire({
          title: 'Deletado com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })


    //   if(confirm("Tem certeza que deseja deletar este registro ?")){

    // }
  }

}
