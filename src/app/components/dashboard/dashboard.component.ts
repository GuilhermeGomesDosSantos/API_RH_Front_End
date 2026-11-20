import { Component } from '@angular/core';
import { ColaboradorlistComponent } from '../colaboradorlist/colaboradorlist.component';

@Component({
  imports: [ColaboradorlistComponent],
  selector: 'app-dashboard',
  styleUrl: './dashboard.component.scss',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
