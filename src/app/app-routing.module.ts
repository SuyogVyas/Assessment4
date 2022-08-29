import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';


const routes: Routes = [
    {path:'list',component:EmployeelistComponent},
    {path:'create',component:EmployeeformComponent},
    {path:'',redirectTo:'create' ,pathMatch:'full'}
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
