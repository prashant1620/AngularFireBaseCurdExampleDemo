import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './User/login/login.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';



const routes: Routes =[
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'table', component: EmployeeListComponent }
  
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {
  }
  