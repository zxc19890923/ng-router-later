import {NgModule} from '@angular/core';
import {AboutComponent} from "./components/about.component.ts";
import {RouterModule, Routes} from "@angular/router";

const childRouter:Routes = [
  {
    path: '',
    component: AboutComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(childRouter)
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule {

}
