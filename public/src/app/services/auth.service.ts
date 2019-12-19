import { Injectable } from "@angular/core";
import { User } from "../models/user.interface";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Login } from "../models/login.interface";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLoggedIn = false;
  user: User;
  constructor(private http: HttpClient, private router: Router) {}
  loginUser(user: Login) {
    return this.http.post<User>("/api/users/login", user).subscribe(data => {
      this.processUser(data);
    });
  }
  createUser(user: User) {
    return this.http.post<User>("/api/users/new", user).subscribe(data => {
      this.processUser(data);
    });
  }
  processUser(user: User) {
    console.log(user);
    this.user = user;
    this.isLoggedIn = true;
    this.router.navigate(["/home"]);
  }
}
