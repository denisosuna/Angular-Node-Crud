import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { ModifyComponent } from './modify/modify.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"add",component:AddComponent},
  {path:"modify/:id",component:ModifyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
