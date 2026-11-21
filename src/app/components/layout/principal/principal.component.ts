import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [MenuComponent, RouterOutlet],
  selector: 'app-principal',
  styleUrl: './principal.component.scss',
  templateUrl: './principal.component.html',
})
export class PrincipalComponent {}
