import { Component, OnInit } from "@angular/core";
import { ProjectService } from "src/app/services/project.service";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.interface";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"]
})
export class EditProfileComponent implements OnInit {
  user: User;
  constructor(
    private projectService: ProjectService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.authService.user;
  }
  editUser() {
    this.projectService.updateUser(this.user).subscribe(data => {
      console.log(data);
      this.router.navigate(["/home"]);
    });
  }
}
