import { Component, OnInit } from "@angular/core";
import { ProjectService } from "src/app/services/project.service";
import { Achievement } from "src/app/models/achievement.interface";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { User } from "src/app/models/user.interface";

@Component({
  selector: "app-edit-achievement",
  templateUrl: "./edit-achievement.component.html",
  styleUrls: ["./edit-achievement.component.scss"]
})
export class EditAchievementComponent implements OnInit {
  selectedAchievement: Achievement;
  user: User;
  constructor(
    private projectService: ProjectService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.authService.user;
    this.getOneAchievement();
  }
  getOneAchievement() {
    this.route.params.subscribe((params: Params) => {
      for (const achievement of this.user.achievements) {
        if (achievement._id == params["id"]) {
          this.selectedAchievement = achievement;
          break;
        }
      }
    });
  }
  editAchievement() {
    this.projectService
      .updateAchievement(this.selectedAchievement)
      .subscribe(data => {
        this.router.navigate(["/achievementdetails", this.selectedAchievement._id]);
      });
  }
}
