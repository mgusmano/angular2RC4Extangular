/* tslint:disable:member-ordering */
import { Component } from '@angular/core';
import { ExtJS } from '../../extjs-angular2/extjs';
import { WestComponent } from './west.component'
//import {ExtJSGrid} from '../../extjs-angular2/extjs.grid';
//import {SalesStore} from '../../store/sales.store';

@Component({
	directives: [ ExtJS, WestComponent ],
	selector: 'home',
	template: `
		<div class="row">
			<div class="col-sm-12">
				<extjs #simple
					xtype="panel"
					xfit="true"
					[config]="configViewport"
					(ready)="onReadySimple($event)"
				>
					<extjs xtype="panel" [config]="configNorth" > 	</extjs>
					<extjs xtype="panel" [config]="configWest" >
						<extjs xtype="panel" [config]="configWestChild" > <west></west>	</extjs>
					</extjs>
					<extjs xtype="panel" [config]="configCenter" > 	</extjs>
					<extjs xtype="panel" [config]="configEast" > 		</extjs>
					<extjs xtype="panel" [config]="configSouth" > 	</extjs>
				</extjs>
			</div>
		</div>
	`
})

export class HomeComponent {
	private configViewport: any = { layout: 'border' };
	private configNorth: any = { region: 'north', html: 'north', height: 50 };
	private configWest: any = { region: 'west', html: 'west', split: true };
	private configWestChild: any = { html: 'west child', title: 'west child' };
	private configCenter: any = { region: 'center', html: 'center' };
	private configEast: any = { region: 'east', html: 'east', split: true };
	private configSouth: any = { region: 'south', html: 'south', height: 50 };


									
									//<extjs xtype="panel" [config]="configChild" > </extjs>

		
					// <extjs-grid #theGridSales
					// 	fit=true,
					// 	[(title)]="titleSales"
					// 	[columns]= "columnsSales" 
					// 	[selModel]="selModelSales"
					// 	[store]="storeSales"
					// 	(select)="onGridSelectSales($event)"
					// 	(selectionchange)="onGridSelectionChangeSales($event)"
					// ></extjs-grid>	

	constructor () {
		this.extjsSimpleConstruct();
		this.extjsChildConstruct();
		//this.gridSalesConstruct();
	}
	
	//**********************************************
	private configSimple: any;
	private extjsSimpleConstruct() {
		this.configSimple = {
			title: 'parent',
			height: 200,
			layout: 'hbox',
			//html: 'hello'
		};
	}
	private onReadySimple(event) {
		console.log(event);
	}
	//**********************************************
	
		//**********************************************
	private configChild: any;
	private extjsChildConstruct() {
		this.configChild = {
			title: 'child',
			height: 200,
			width: 300
			//layout: 'fit',
			//html: 'hello'
		};
	}
	private onReadyChild(event) {
		console.log(event);
	}
	//**********************************************
	
	// //**********************************************
	// private titleSales: string;
	// private columnsSales: any;
	// private selModelSales: any;
	// private storeSales: any;
	// private configSales: any;
	// private gridSalesConstruct() {
	// 	this.titleSales = 'Home';
	// 	this.columnsSales = [
	// 		{ text: 'Orderid', dataIndex: 'orderid' },
	// 		{ text: 'Salesperson', dataIndex: 'salesperson', width: 125 },
	// 		{ text: 'Amount', dataIndex: 'amount' },
	// 		{ text: 'Country', dataIndex: 'country', width: 125 },
	// 		{ text: 'Orderdate', dataIndex: 'orderdate', width: 300 },
	// 		{ text: 'Person - range', dataIndex: 'person-range', width: 150 },
	// 		{ text: 'Year', dataIndex: 'year', flex: 1 }
	// 	];
	// 	this.selModelSales = {};
	// 	this.storeSales = new SalesStore({}).extjsObject;
	// 	this.configSales = {
	// 		margin: '0 0 5 0',
	// 		height: 400,
	// 		loadMask: true,
	// 		multiSelect: true,
	// 		viewConfig: {
	// 			trackOver: false,
	// 			emptyText: '<h1 style="margin:20px">No matching results</h1>'
	// 		}
	// 	};
	// }
	// private onGridSelectSales(event) {
	// 	console.log(event);
	// }
	// private onGridSelectionChangeSales(event) {
	// 	console.log(event);
	// }
	// //**********************************************
}
