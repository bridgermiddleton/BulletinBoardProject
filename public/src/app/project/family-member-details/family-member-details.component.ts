import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user.interface";
import { ProjectService } from "src/app/services/project.service";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Family } from "src/app/models/family.interface";

@Component({
  selector: "app-family-member-details",
  templateUrl: "./family-member-details.component.html",
  styleUrls: ["./family-member-details.component.scss"]
})
export class FamilyMemberDetailsComponent implements OnInit {
  member: User;
  family: Family;
  constructor(
    private projectService: ProjectService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.projectService.getOneUser(params["id"]).subscribe(data => {
        this.member = data;
        this.family = this.authService.family;
      });
    });
  }
}
