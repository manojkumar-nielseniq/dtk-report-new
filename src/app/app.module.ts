import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { TemplComponent } from './templ/templ.component';
import { TableComponent } from './table/table.component';
import { FindMyStuffComponent } from './find-my-stuff/find-my-stuff.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    TemplComponent,
    TableComponent,
    FindMyStuffComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
