import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentClientComponent } from './component-client/component-client.component';
import { ComponentHomeComponent } from './component-home/component-home.component';

// Routing initialisation
const routes: Routes = [
  { path: 'home', component: ComponentHomeComponent },
  { path: 'client', component: ComponentClientComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
