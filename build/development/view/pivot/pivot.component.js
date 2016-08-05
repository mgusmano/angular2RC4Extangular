System.register(['@angular/core', 'angular2-highcharts', '../../extjs-angular2/extjs.pivotgrid', '../../store/sales.store'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, angular2_highcharts_1, extjs_pivotgrid_1, sales_store_1;
    var PivotComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            },
            function (extjs_pivotgrid_1_1) {
                extjs_pivotgrid_1 = extjs_pivotgrid_1_1;
            },
            function (sales_store_1_1) {
                sales_store_1 = sales_store_1_1;
            }],
        execute: function() {
            PivotComponent = (function () {
                function PivotComponent() {
                    //**********************************************
                    //**********************************************
                    this.chartTitle = 'By Country';
                    //**********************************************
                    this.reports = [
                        { id: 'By Country', name: 'What are the order amounts of each salesperson in a specific country?' },
                        { id: 'By Year', name: 'How did salespeople perform in a specific year?' },
                        { id: 'Total', name: 'What are the order amounts of each salesperson?' }
                    ];
                    this.pivotGridConstruct();
                }
                PivotComponent.prototype.readyPivotGrid = function (thePivotGrid) {
                    this.thePivotGrid = thePivotGrid;
                };
                PivotComponent.prototype.pivotGridConstruct = function () {
                    this.titlePivotGrid = 'Pivot Grid';
                    this.topAxisPivotGrid = [{ dataIndex: 'country', direction: 'ASC' }];
                    this.leftAxisPivotGrid = [
                        {
                            width: 120,
                            id: 'salesperson',
                            dataIndex: 'salesperson',
                            header: 'Sales person'
                        }
                    ];
                    this.aggregatePivotGrid = [
                        {
                            measure: 'amount',
                            header: 'Grand total',
                            dataIndex: 'amount',
                            aggregator: 'sum',
                            align: 'right',
                            width: 135,
                            renderer: Ext.util.Format.numberRenderer('0,000.00')
                        }
                    ],
                        this.storePivotGrid = new sales_store_1.SalesStore({}).extjsObject;
                    this.configPivotGrid = {
                        style: { border: '1px solid #e9e9e9' },
                        plugins: [{ ptype: 'pivotdrilldown' }],
                        rowGrandTotalsPosition: 'none'
                    };
                };
                PivotComponent.prototype.saveInstance = function (chartInstance) {
                    this.chart = chartInstance;
                };
                PivotComponent.prototype.onReportComboChange = function (newValue) {
                    var me = this;
                    var topAxis = {};
                    switch (newValue) {
                        case 'By Country':
                            topAxis = { topAxis: [{ dataIndex: 'country', direction: 'ASC' }] };
                            break;
                        case 'By Year':
                            topAxis = { topAxis: [{ dataIndex: 'year', direction: 'ASC' }] };
                            break;
                        case 'Total':
                            topAxis = { topAxis: [] };
                            break;
                    }
                    this.thePivotGrid.extjsObject.reconfigurePivot(topAxis);
                    this.chartTitle = newValue;
                };
                PivotComponent.prototype.getChartDataFromGridData = function (event) {
                    var xAxisChartCategories = [];
                    var chartSeriesStore = [];
                    var items = this.thePivotGrid.extjsObject.getPivotStore().data.items;
                    var columns = this.thePivotGrid.extjsObject.headerCt.getGridColumns();
                    var d;
                    items.forEach(function (item) {
                        xAxisChartCategories.push(item.data.salesperson);
                    });
                    columns.forEach(function (column) {
                        if (!column.leftAxis) {
                            d = [];
                            items.forEach(function (item) {
                                d.push(item.data[column.dataIndex]);
                            });
                            chartSeriesStore.push({ type: 'column', name: column.text, data: d });
                        }
                    });
                    this.doChartOptions(xAxisChartCategories, chartSeriesStore);
                };
                PivotComponent.prototype.doChartOptions = function (xAxisChartCategories, chartSeriesStore) {
                    this.chartOptions = {
                        plotOptions: { series: { animation: false } },
                        title: { text: this.chartTitle },
                        legend: { verticalAlign: 'top', y: 25 },
                        xAxis: { categories: xAxisChartCategories },
                        series: chartSeriesStore
                    };
                };
                PivotComponent = __decorate([
                    core_1.Component({
                        directives: [extjs_pivotgrid_1.ExtJSPivotGrid, angular2_highcharts_1.CHART_DIRECTIVES],
                        selector: 'pivot',
                        styleUrls: ['app/view/pivot/pivot.component.css'],
                        template: "\n\t\t<div class=\"heading\">Pivot</div>\n\t\t<div class=\"form-item\">\n\t\t\t<span class=\"form-label\">Select report: </span>\n\t\t\t<select class=\"form-combo\" (change)=\"onReportComboChange($event.target.value)\">\n\t\t\t\t<option *ngFor=\"let report of reports\" [value]=\"report.id\">{{report.name}}</option>\n\t\t\t</select>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<extjs-pivotgrid #thePivotGrid\n\t\t\t\t\t[leftAxis]=\"leftAxisPivotGrid\" \n\t\t\t\t\t[topAxis]=\"topAxisPivotGrid\" \n\t\t\t\t\t[leftAxis]=\"leftAxisPivotGrid\" \n\t\t\t\t\t[aggregate]=\"aggregatePivotGrid\"\n\t\t\t\t\t[store]=\"storePivotGrid\"\n\t\t\t\t\t[config]=\"configPivotGrid\"\n\t\t\t\t\t(ready)=\"readyPivotGrid($event)\"\n\t\t\t\t\t(pivotdone)=\"getChartDataFromGridData($event)\"\n\t\t\t\t></extjs-pivotgrid>\n\t\t\t</div>\n\t\t</div>\n\t\t<chart style=\"width: 100%; height: 500px;\"\n\t\t\t[options]=\"chartOptions\"\n\t\t\t(load)=\"saveInstance($event.context)\"\n\t\t></chart>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PivotComponent);
                return PivotComponent;
            }());
            exports_1("PivotComponent", PivotComponent);
        }
    }
});
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
//# sourceMappingURL=pivot.component.js.map