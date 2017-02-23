import {Component} from "@angular/core";
@Component({
  selector: "my-contact",
  templateUrl: "../templates/contact.component.html"
})
export class ContactComponent {
  constructor() {
    console.log("contact");
  }
}
