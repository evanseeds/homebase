import { Component } from '@angular/core'

@Component({
	selector: 'hb-navbar',
	template: `
	<div>
		<a routerLink="/">Home</a>
		<a routerLink="/projects">Projects</a>
	</div>
	`
})
export class NavbarComponent {

}
