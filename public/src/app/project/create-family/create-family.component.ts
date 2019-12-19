import { Component } from '@angular/core';
import { Family } from 'src/app/models/family.interface';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-family',
  templateUrl: './create-family.component.html',
  styleUrls: ['./create-family.component.scss']
})
export class CreateFamilyComponent {
  newFamily: Family = { name: '' };
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  createFamily() {
    this.projectService.createFamily(this.newFamily).subscribe(data => {
      console.log(data);
      this.newFamily = { name: '' };
      this.router.navigate(['/families/join']);
    });
  }
}
