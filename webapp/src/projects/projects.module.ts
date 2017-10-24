import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { ProjectsComponent } from './projects.component'
import { ProjectsService } from './projects.service'

@NgModule({
	declarations: [
		ProjectsComponent
	],
	imports: [
		CommonModule,
		HttpClientModule
	],
	providers: [
		ProjectsService
	]
})
export class ProjectsModule {}
