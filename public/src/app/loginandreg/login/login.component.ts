import { Component, OnInit } from "@angular/core";
import { Login } from "src/app/models/login.interface";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  selectedUser: Login = { email: "", password: "" };
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.selectedUser = { email: "", password: "" };
  }
  loginUser() {
    this.authService.loginUser(this.selectedUser);
  }
}
