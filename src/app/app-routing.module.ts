import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './vistas/landing/landing.component';
import { ErrorComponent } from './vistas/error/error.component';

const routes: Routes = [
  {
    path: "",
    component: LandingComponent
  },
  {
    path: "bo",
    loadChildren: () => import("./vistas/bo/bo.module").then( m => m.BoModule )

  },
  {
    path: "error",
    component: ErrorComponent
  },
  {
    path: "**",
    redirectTo: "/error"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
