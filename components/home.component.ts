import {Component} from "@angular/core";
@Component({
  selector: "my-home",
  templateUrl: "../templates/home.component.html"
})
export class HomeComponent {
  constructor() {
    console.log("home");
  }
}
