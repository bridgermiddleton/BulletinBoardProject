import { Component } from "@angular/core";
import { User } from "src/app/models/user.interface";
import { ProjectService } from "src/app/services/project.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  newUser: User = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    dob: new Date()
  };
  users: User[] = [];
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.projectService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }
  createUser() {
    this.authService.createUser(this.newUser);
  }
  deleteUser(id: string) {
    this.projectService.deleteUser(id).subscribe(() => {
      this.getAllUsers();
    });
  }
}
