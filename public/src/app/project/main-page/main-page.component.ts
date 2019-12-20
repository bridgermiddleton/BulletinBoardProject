import { Component, OnInit } from "@angular/core";
import { Achievement } from "src/app/models/achievement.interface";
import { ProjectService } from "src/app/services/project.service";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { User } from "src/app/models/user.interface";
import { Family } from "src/app/models/family.interface";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"]
})
export class MainPageComponent implements OnInit {
  achievements: Achievement[] = [];
  users: User[] = [];
  family: Family;
  months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  constructor(
    private a: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.a.getAllUsers().subscribe(data => {
      this.users = data;
      this.family = this.authService.family;
    });
  }

  getAllAchievements() {
    this.a.getAllAchievements().subscribe(data => {
      this.achievements = data;
    });
  }
  deleteAchievement(id: string, userIndex: number, achIndex: number) {
    this.users[userIndex].achievements.splice(achIndex, 1);
    this.a.updateUser(this.users[userIndex]).subscribe();
  }
}
