import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { ColaboradorlistComponent } from './components/colaboradores/colaboradorlist/colaboradorlist.component';
import { ColaboradordetailsComponent } from './components/colaboradores/colaboradordetails/colaboradordetails.component';
export const routes: Routes = [
    {path:"", redirectTo:"login", pathMatch: "full"},
    {path:"login", component: LoginComponent},
    {path:"admin", component: PrincipalComponent, children: [
        {path:"colaboradores", component: ColaboradorlistComponent},
        {path:"colaboradores/new", component: ColaboradordetailsComponent},
        {path:"colaboradores/edit/:id", component: ColaboradordetailsComponent}
    ]}
];
