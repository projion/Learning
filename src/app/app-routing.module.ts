// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';
import { NotFoundComponent } from './notfound.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: 'aboutz', component: AboutComponent }, // About page route
  { path: 'test', component: TestComponent },
  { path: 'hello', component: HelloComponent }, 
  { path: '**', component: NotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
