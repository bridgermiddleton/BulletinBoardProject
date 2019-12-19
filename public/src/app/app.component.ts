import { Component } from "@angular/core";
import { ProjectService } from "./services/project.service";
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  goToCreateAchievement() {
    this.route.params.subscribe((params: Params) => {
      this.router.navigate(["/create", params["id"]]);
    });
  }
}
