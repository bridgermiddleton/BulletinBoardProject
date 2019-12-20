import { Injectable } from "@angular/core";
import { User } from "../models/user.interface";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Login } from "../models/login.interface";
import { Family } from "../models/family.interface";
import { ProjectService } from "./project.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLoggedIn = false;
  user: User;
  family: Family;
  families: Family[];
  constructor(
    private http: HttpClient,
    private router: Router,
    private projectService: ProjectService
  ) {}
  loginUser(user: Login) {
    return this.http.post<User>("/api/users/login", user).subscribe(data => {
      this.processUser(data);
      this.projectService.getAllFamilies().subscribe(data => {
        this.families = data;
        console.log(this.families);
        for (const family of this.families) {
          console.log(family);
          for (const user of family.users) {
            if (user._id == this.user._id) {
              this.family = family;
              break;
            }
          }
        }
        console.log(this.family);
        this.router.navigate(["/home"]);
      });
    });
  }
  createUser(user: User) {
    return this.http.post<User>("/api/users/new", user).subscribe(data => {
      this.processUser(data);
      this.router.navigate(["/families/join"]);
    });
  }
  processUser(user: User) {
    console.log(user);
    this.user = user;
    this.isLoggedIn = true;
  }
}
