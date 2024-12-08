////// app.module.ts
////import { NgModule } from '@angular/core';
////import { BrowserModule } from '@angular/platform-browser';
////import { AppRoutingModule } from './app-routing.module';  // Import your routing module
////import { AppComponent } from './app.component';
////import { CommonModule } from '@angular/common';
////import { RouterModule } from '@angular/router';  // Import RouterModule

////@NgModule({
////  declarations: [AppComponent],
////  imports: [
////    BrowserModule,
////    CommonModule,
////    AppRoutingModule,  // Routing module
////    RouterModule,      // Add RouterModule here
////  ],
////  bootstrap: [AppComponent],
////})
////export class AppModule { }




//// app.module.ts
//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { AppComponent } from './app.component';  // Import the standalone component
//import { CommonModule } from '@angular/common';

//@NgModule({
//  declarations: [],
//  imports: [
//    BrowserModule,
//    CommonModule,
//    AppComponent  // Import AppComponent directly here (since it's standalone)
//  ],
//  bootstrap: [AppComponent],
//})
//export class AppModule { }

// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // Import AppRoutingModule

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],  // Import AppRoutingModule for routing
  bootstrap: [AppComponent]
})
export class AppModule { }



