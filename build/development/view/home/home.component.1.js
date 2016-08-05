System.register(['@angular/core', '../../extjs-angular2/extjs'], function(exports_1, context_1) {
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
    var core_1, extjs_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (extjs_1_1) {
                extjs_1 = extjs_1_1;
            }],
        execute: function() {
            //import {ExtJSGrid} from '../../extjs-angular2/extjs.grid';
            //import {SalesStore} from '../../store/sales.store';
            HomeComponent = (function () {
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
                function HomeComponent() {
                    this.configViewport = { layout: 'border' };
                    this.configNorth = { region: 'north', html: 'north', height: 50 };
                    this.configWest = { region: 'west', html: 'west', split: true };
                    this.configCenter = { region: 'center', html: 'center' };
                    this.configEast = { region: 'east', html: 'east', split: true };
                    this.configSouth = { region: 'south', html: 'south', height: 50 };
                    this.extjsSimpleConstruct();
                    this.extjsChildConstruct();
                    //this.gridSalesConstruct();
                }
                HomeComponent.prototype.extjsSimpleConstruct = function () {
                    this.configSimple = {
                        title: 'parent',
                        height: 200,
                        layout: 'hbox',
                    };
                };
                HomeComponent.prototype.onReadySimple = function (event) {
                    console.log(event);
                };
                HomeComponent.prototype.extjsChildConstruct = function () {
                    this.configChild = {
                        title: 'child',
                        height: 200,
                        width: 300
                    };
                };
                HomeComponent.prototype.onReadyChild = function (event) {
                    console.log(event);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        directives: [extjs_1.ExtJS],
                        selector: 'home',
                        template: "\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<extjs #simple\n\t\t\t\t\txtype=\"panel\"\n\t\t\t\t\txfit=\"true\"\n\t\t\t\t\t[config]=\"configViewport\"\n\t\t\t\t\t(ready)=\"onReadySimple($event)\"\n\t\t\t\t>\n\t\t\t\t\t<extjs xtype=\"panel\" [config]=\"configNorth\" > \t</extjs>\n\t\t\t\t\t<div>\n\t\t\t\t\t<extjs xtype=\"panel\" [config]=\"configWest\" > \t\t</extjs>\n\t\t\t\t\t</div>\n\t\t\t\t\t<extjs xtype=\"panel\" [config]=\"configCenter\" > \t</extjs>\n\t\t\t\t\t<extjs xtype=\"panel\" [config]=\"configEast\" > \t\t</extjs>\n\t\t\t\t\t<extjs xtype=\"panel\" [config]=\"configSouth\" > \t</extjs>\n\t\t\t\t</extjs>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.1.js.map