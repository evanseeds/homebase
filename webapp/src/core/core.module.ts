import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeComponent } from './home.component'
import { NavbarComponent } from './navbar.component'

import { AppRoutingModule } from './app-routing.module'

@NgModule({
	declarations: [
		HomeComponent,
		NavbarComponent
	],
	imports: [
		CommonModule,
		AppRoutingModule
	],
	exports: [
		AppRoutingModule,
		NavbarComponent
	]
})
export class CoreModule {}
