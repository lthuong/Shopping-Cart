import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  model = { username: "", password: "", remember: false };
  constructor() {}

  ngOnInit(): void {}

  login(form: NgForm) {
    // submit the data
  }
}
