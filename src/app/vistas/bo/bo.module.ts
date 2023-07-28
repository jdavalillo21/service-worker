import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { BoRoutingModule } from './bo-routing.module';



@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    BoRoutingModule
  ]
})
export class BoModule { }
