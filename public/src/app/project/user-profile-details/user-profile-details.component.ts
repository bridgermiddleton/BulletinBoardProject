import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user.interface";
import { ProjectService } from "src/app/services/project.service";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Achievement } from "src/app/models/achievement.interface";

@Component({
  selector: "app-user-profile-details",
  templateUrl: "./user-profile-details.component.html",
  styleUrls: ["./user-profile-details.component.scss"]
})
export class UserProfileDetailsComponent implements OnInit {
  user: User;
  selectedAchievement: Achievement;
  constructor(
    private projectService: ProjectService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.authService.user;
  }
}
