import { Component, OnInit } from "@angular/core";
import { ProjectService } from "src/app/services/project.service";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.interface";
import { ActivatedRoute, Router } from "@angular/router";
import { Family } from "src/app/models/family.interface";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"]
})
export class EditProfileComponent implements OnInit {
  user: User;
  family: Family;
  constructor(
    private projectService: ProjectService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.authService.user;
    this.family = this.authService.family;
  }
  editUser() {
    this.projectService.updateUser(this.user).subscribe(data => {
      console.log(data);
      this.router.navigate(["/home"]);
    });
  }
}
