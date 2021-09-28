import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ModifyComponent } from './modify/modify.component';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    ModifyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
})
export class DashboardModule { }
