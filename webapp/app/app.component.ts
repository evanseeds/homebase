import { Component } from '@angular/core';
@Component({
    selector: 'homebase-root',
    template: `
			<h1>Welcome to your Homebase!</h1>
			<button (click)="increment()">{{ counter }}</button>
		`
})
export class AppComponent {
	counter = 0;

	increment() {
		this.counter += 1;
	}
}
