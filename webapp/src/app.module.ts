import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'

import { CoreModule } from './core/core.module'
import { ProjectsModule } from './projects/projects.module'

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
    CoreModule,
		ProjectsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
