import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {AdminComponent} from "./admin/admin.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: "full"
  },
  {
    path: 'admin/:id',
    component: AdminComponent,
  },
];
