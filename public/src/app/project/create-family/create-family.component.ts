import { Component, OnInit } from "@angular/core";
import { Family } from "src/app/models/family.interface";
import { ProjectService } from "src/app/services/project.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-create-family",
  templateUrl: "./create-family.component.html",
  styleUrls: ["./create-family.component.scss"]
})
export class CreateFamilyComponent implements OnInit {
  newFamily: Family = { name: "" };
  family: Family;
  constructor(
    private projectService: ProjectService,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit() {
    this.family = this.authService.family;
  }
  createFamily() {
    this.projectService.createFamily(this.newFamily).subscribe(data => {
      console.log(data);
      this.newFamily = { name: "" };
      this.router.navigate(["/families/join"]);
    });
  }
}
