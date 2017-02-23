import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from './components/app.component';
import {HomeComponent} from "./components/home.component";
import {ContactComponent} from "./components/contact.component";

const MyRouter:Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    loadChildren: "app/about.module#AboutModule"
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(MyRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
