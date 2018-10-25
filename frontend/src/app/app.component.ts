import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "DTH Services";
  logoUrl: string;

  constructor() {
    this.logoUrl = "/assets/logo.png";
  }
}
