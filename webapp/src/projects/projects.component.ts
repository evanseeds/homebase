import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { ProjectsService } from './projects.service'

@Component({
	template: `
	<h2>Welcome home</h2>
	<div *ngFor="let project of projects | async">
		{{ project.name }} - {{ project.status }}
	</div>
	`
})
export class ProjectsComponent {
	projects: Observable<any> = this.projectsService.getProjects()

	constructor(private projectsService: ProjectsService) {}
}
