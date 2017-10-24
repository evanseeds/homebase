import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { ProjectsComponent } from './projects.component'
import { ProjectsService } from './projects.service'

@NgModule({
	declarations: [
		ProjectsComponent
	],
	imports: [
		HttpClientModule
	],
	providers: [
		ProjectsService
	]
})
export class ProjectsModule {}
