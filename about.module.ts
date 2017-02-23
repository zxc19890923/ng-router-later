import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./components/about.component";
import {ListComponent} from "./components/list.component";

const childRouter:Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: "list",
    component: ListComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(childRouter)
  ],
  declarations: [
    AboutComponent,
    ListComponent
  ]
})
export class AboutModule {

}
