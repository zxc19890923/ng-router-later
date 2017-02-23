import {Component} from "@angular/core";
@Component({
  selector: "my-list",
  template: "列表"
})
export class ListComponent {
  constructor() {
    console.log("list");
  }
}
