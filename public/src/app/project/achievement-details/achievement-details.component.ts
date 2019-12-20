import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user.interface";
import { ProjectService } from "src/app/services/project.service";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Achievement } from "src/app/models/achievement.interface";

@Component({
  selector: "app-achievement-details",
  templateUrl: "./achievement-details.component.html",
  styleUrls: ["./achievement-details.component.scss"]
})
export class AchievementDetailsComponent implements OnInit {
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
    console.log(this.user);
    this.getOneAchievement();
  }
  getOneAchievement() {
    this.route.params.subscribe((params: Params) => {
      // tslint:disable-next-line: no-string-literal
      console.log(params["id"]);
      for (const achievement of this.user.achievements) {
        if (achievement._id == params["id"]) {
          this.selectedAchievement = achievement;
          break;
        }
      }
    });
  }
}
