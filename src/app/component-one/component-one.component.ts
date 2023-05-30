import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-component-one',
	templateUrl: './component-one.component.html',
	styleUrls: ['./component-one.component.css']
})

export class ComponentOneComponent {
	@Output() myAction = new EventEmitter<string>();
  contador: number = 0;

	onClickAction(): void {
    this.contador ++;
		this.myAction.emit('Contador desde component one : ' + this.contador);
	}
}
