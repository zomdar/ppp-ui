import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatesComponent } from './states/states.component';
import { AboutComponent } from './about/about.component';
import { BusinessInfoComponent } from './business-info/business-info.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "states", component: StatesComponent },
  { path: "about", component: AboutComponent },
  { path: "business", component: BusinessInfoComponent },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
   })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
