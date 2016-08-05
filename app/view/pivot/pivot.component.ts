import { Component } from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts';
import { Highcharts } from 'angular2-highcharts';
import { ExtJSPivotGrid } from '../../extjs-angular2/extjs.pivotgrid';
import { SalesStore } from '../../store/sales.store';

@Component({
	directives: [ ExtJSPivotGrid, CHART_DIRECTIVES ],
	selector: 'pivot',
	styleUrls:  ['app/view/pivot/pivot.component.css'],
	template: `
		<div class="heading">Pivot</div>
		<div class="form-item">
			<span class="form-label">Select report: </span>
			<select class="form-combo" (change)="onReportComboChange($event.target.value)">
				<option *ngFor="let report of reports" [value]="report.id">{{report.name}}</option>
			</select>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<extjs-pivotgrid #thePivotGrid
					[leftAxis]="leftAxisPivotGrid" 
					[topAxis]="topAxisPivotGrid" 
					[leftAxis]="leftAxisPivotGrid" 
					[aggregate]="aggregatePivotGrid"
					[store]="storePivotGrid"
					[config]="configPivotGrid"
					(ready)="readyPivotGrid($event)"
					(pivotdone)="getChartDataFromGridData($event)"
				></extjs-pivotgrid>
			</div>
		</div>
		<chart style="width: 100%; height: 500px;"
			[options]="chartOptions"
			(load)="saveInstance($event.context)"
		></chart>
	`
})
export class PivotComponent {

	constructor () {
		this.pivotGridConstruct();
	}

	readyPivotGrid(thePivotGrid) {
		this.thePivotGrid = thePivotGrid;
	}

	//**********************************************
	private thePivotGrid; ANY;
	private titlePivotGrid: string;
	private leftAxisPivotGrid: any;
	private topAxisPivotGrid: any;
	private aggregatePivotGrid: any;
	private storePivotGrid: any;
	private configPivotGrid: any;
	private pivotGridConstruct() {
		this.titlePivotGrid = 'Pivot Grid';
		this.topAxisPivotGrid = [{	dataIndex: 'country', direction: 'ASC' }];
		this.leftAxisPivotGrid = [
			{
				width:      120,
				id:         'salesperson',
				dataIndex:  'salesperson',
				header:     'Sales person'
			}
		];
		this.aggregatePivotGrid = [
			{
				measure:    'amount',
				header:     'Grand total',
				dataIndex:  'amount',
				aggregator: 'sum',
				align:      'right',
				width:      135,
				renderer:   Ext.util.Format.numberRenderer('0,000.00')
			}
		],
		this.storePivotGrid= new SalesStore({}).extjsObject;
		this.configPivotGrid = {
			style: { border: '1px solid #e9e9e9' },
			plugins: [{ ptype: 'pivotdrilldown' }],
			rowGrandTotalsPosition: 'none'
		};
	}
	//**********************************************

	//**********************************************
	private chartTitle: any = 'By Country';
	private chartOptions: any;
	private chart : any;
	private saveInstance(chartInstance) {
		this.chart = chartInstance;
	}
	//**********************************************

	private reports: any = [
		{ id: 'By Country', name: 'What are the order amounts of each salesperson in a specific country?' },
		{ id: 'By Year', name: 'How did salespeople perform in a specific year?' },
		{ id: 'Total', name: 'What are the order amounts of each salesperson?' }
	];
	private onReportComboChange(newValue) {
		let me = this;

		var topAxis = {};
		switch(newValue){
			case 'By Country':
				topAxis = { topAxis: [{	dataIndex: 'country', direction: 'ASC' }] };
				break;
			case 'By Year':
				topAxis = { topAxis: [{ dataIndex: 'year', direction: 'ASC' }] };
				break;
			case 'Total':
				topAxis = {	topAxis: [] };
				break;
		}
		this.thePivotGrid.extjsObject.reconfigurePivot(topAxis);
		this.chartTitle = newValue;
	}

	private getChartDataFromGridData(event) {
		var xAxisChartCategories = [];
		let chartSeriesStore: any = [];
		var items = this.thePivotGrid.extjsObject.getPivotStore().data.items;
		var columns = this.thePivotGrid.extjsObject.headerCt.getGridColumns();
		var d: any;

		items.forEach(function(item) {
			xAxisChartCategories.push(item.data.salesperson);
		});

		columns.forEach(function(column) {
			if(!column.leftAxis) {
				d = [];
				items.forEach(function(item) {
					d.push(item.data[column.dataIndex]);
				});
				chartSeriesStore.push({ type: 'column', name: column.text, data: d });
			}
		});

		this.doChartOptions(xAxisChartCategories,
												chartSeriesStore);
	}

	doChartOptions(xAxisChartCategories, chartSeriesStore) {
		this.chartOptions = {
			plotOptions: { series: { animation: false }},
			title: { text : this.chartTitle },
			legend: { verticalAlign: 'top', y: 25 },
			xAxis: { categories: xAxisChartCategories },
			series: chartSeriesStore
		};
	}

}

		//console.log(xAxisChartCategories);
		//console.log(chartSeriesStore);

		//xAxisChartCategories = ["Jane Smith", "John Doe", "Lisa Peacock", "Michael Dean", "Grand Totals"];
		// chartSeriesStore = [
		// 	{"type":"column","name":"Belgium","data":[36659,36001,27171,37337]},
		// 	{"type":"column","name":"Canada","data":[33593,52319,33448,23242]},
		// 	{"type":"column","name":"Netherlands","data":[34337,43152,31887,35793]},
		// 	{"type":"column","name":"United Kingdom","data":[41866,33446,37294,43010]},
		// 	{"type":"column","name":"United States","data":[39288,47861,41126,39545]},
		// 	{"type":"column","name":"Grand Totals","data":[185743,212779,170926,178927]}
		// ];