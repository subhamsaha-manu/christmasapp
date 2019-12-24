import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ComponentComponent } from './component/component.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'contentComponent',component:ComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
