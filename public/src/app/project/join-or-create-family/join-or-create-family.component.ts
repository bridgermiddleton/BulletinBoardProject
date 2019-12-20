import { Component, OnInit } from "@angular/core";
import { Family } from "src/app/models/family.interface";
import { ProjectService } from "src/app/services/project.service";
import { User } from "src/app/models/user.interface";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-join-or-create-family",
  templateUrl: "./join-or-create-family.component.html",
  styleUrls: ["./join-or-create-family.component.scss"]
})
export class JoinOrCreateFamilyComponent implements OnInit {
  families: Family[] = [];
  user: User;
  selectedFamily: Family;
  constructor(
    private projectService: ProjectService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.user = this.authService.user;
    this.getAllFamilies();
  }
  getAllFamilies() {
    this.projectService.getAllFamilies().subscribe(data => {
      this.families = data;
    });
  }
  joinFamily(id: string) {
    this.projectService.getOneFamily(id).subscribe(data => {
      this.selectedFamily = data;
      this.selectedFamily.users.push(this.user);
      console.log(this.selectedFamily);
      this.router.navigate(["/home"]);
    });
  }
}
