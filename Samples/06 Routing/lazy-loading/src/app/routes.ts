import {Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: "full"
  },
  {
    path: 'admin/:id',
    loadChildren: "app/admin/admin.module#AdminModule"
  },
];
