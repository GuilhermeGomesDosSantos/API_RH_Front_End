import { Routes } from '@angular/router';
import { ColaboradorlistComponent } from './components/colaboradorlist/colaboradorlist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
export const routes: Routes = [
    {path:"", redirectTo:"dashboard", pathMatch: "full"},
    {path: "dashboard", component: DashboardComponent},
    {path:"colaboradores", component: ColaboradorlistComponent}

];
