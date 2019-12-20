import { Component, OnInit } from "@angular/core";
import { Family } from "src/app/models/family.interface";
import { ProjectService } from "src/app/services/project.service";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.interface";

@Component({
  selector: "app-my-family",
  templateUrl: "./my-family.component.html",
  styleUrls: ["./my-family.component.scss"]
})
export class MyFamilyComponent implements OnInit {
  selectedFamily: Family;
  user: User;
  constructor(
    private projectService: ProjectService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.selectedFamily = this.authService.family;
    console.log(this.selectedFamily);
    this.user = this.authService.user;
    console.log(this.selectedFamily);
  }
}
