import {Component, OnInit} from "@angular/core";
@Component({
  selector: "my-about",
  templateUrl: "../templates/about.component.html"
})
export class AboutComponent {
  constructor() {
    console.log("about");
  }
}
