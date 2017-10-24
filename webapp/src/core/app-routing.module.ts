import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectsComponent } from '../projects/projects.component';
import { HomeComponent } from './home.component';

const routes = [
	{ path: '', component: HomeComponent },
	{ path: 'projects', component: ProjectsComponent }
];


@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
}) export class AppRoutingModule {}
