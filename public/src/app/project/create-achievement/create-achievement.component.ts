import { Component, OnInit } from "@angular/core";
import { Achievement } from "src/app/models/achievement.interface";
import { User } from "src/app/models/user.interface";
import { ProjectService } from "src/app/services/project.service";
import { AuthService } from "src/app/services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-create-achievement",
  templateUrl: "./create-achievement.component.html",
  styleUrls: ["./create-achievement.component.scss"]
})
export class CreateAchievementComponent implements OnInit {
  achievements: Achievement[] = [];
  user: User;
  newAch: Achievement = {
    category: "",
    title: "",
    description: "",
    image_url: "",
    unit_of_time: "days",
    length_of_time: 0
  };

  constructor(
    private projectService: ProjectService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user = this.authService.user;
    console.log(this.user);
  }

  createAchievement() {
    this.projectService
      .createAchievement(this.user._id, this.newAch)
      .subscribe(data => {
        console.log(data);
        this.achievements.push(data);
        this.newAch = {
          category: "",
          title: "",
          description: "",
          image_url: "",
          unit_of_time: "days",
          length_of_time: 0
        };
        this.router.navigate(["/home"]);
      });
  }
}
