import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentClientComponent } from './component-client/component-client.component';
import { from } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { ClientService } from '../shared/services/client.service';
// import material Design bootstrap
import { MDBBootstrapModule, IconsModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    ComponentClientComponent,
    AppComponent,
    ComponentClientComponent,
    ComponentHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSliderModule,
    HttpClientModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ ClientService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
