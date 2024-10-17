import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), ComponentsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
