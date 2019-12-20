import { Component } from "@angular/core";
import { ProjectService } from "./services/project.service";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { User } from "./models/user.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  user: User;
  constructor(
    private projectService: ProjectService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  goToCreateAchievement() {
    this.route.params.subscribe((params: Params) => {
      this.router.navigate(["/create", params["id"]]);
    });
  }
}
