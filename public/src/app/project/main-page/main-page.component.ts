import { Component, OnInit } from "@angular/core";
import { Achievement } from "src/app/models/achievement.interface";
import { ProjectService } from "src/app/services/project.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"]
})
export class MainPageComponent implements OnInit {
  achievements: Achievement[] = [];

  constructor(private a: ProjectService) {}

  ngOnInit() {
    this.getAllAchievements();
  }

  getAllAchievements() {
    this.a.getAllAchievements().subscribe(data => {
      this.achievements = data;
    });
  }
}
