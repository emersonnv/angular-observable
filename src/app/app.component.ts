import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	valorDesdeComponentOne: string = '';

	myActionOutput(event: string): void {
		this.valorDesdeComponentOne = event;
	}
}
