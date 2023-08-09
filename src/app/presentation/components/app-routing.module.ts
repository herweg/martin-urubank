import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphsComponent } from './graphs/graphs.component';
import { BodyComponent } from './body/body.component';
import { DateStatusFilterComponent } from './date-status-filter/date-status-filter.component';

const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { hideSidebar: true }
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'graphs',
        component: GraphsComponent
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
