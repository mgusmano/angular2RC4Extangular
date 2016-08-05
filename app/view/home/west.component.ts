import { Component } from '@angular/core';
import { ExtJS } from '../../extjs-angular2/extjs';

@Component({
	directives: [ ExtJS ],
	selector: 'west',
	template: `
	hi
		<extjs xtype="panel" [config]="configWest" > 		</extjs>
	`
})

export class WestComponent {
	private configWest: any = { region: 'west', html: 'west', split: true };

	constructor () {}

}
