System.register(['@angular/core', '../../extjs-angular2/extjs.button', '../../extjs-angular2/extjs.grid', '../../extjs-angular2/extjs.pivotgrid', '../../store/sales.store', './simpsons.store', './forum.store', './simpsons.model'], function(exports_1, context_1) {
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
    var core_1, extjs_button_1, extjs_grid_1, extjs_pivotgrid_1, sales_store_1, simpsons_store_1, forum_store_1, simpsons_model_1;
    var ExtAngularComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (extjs_button_1_1) {
                extjs_button_1 = extjs_button_1_1;
            },
            function (extjs_grid_1_1) {
                extjs_grid_1 = extjs_grid_1_1;
            },
            function (extjs_pivotgrid_1_1) {
                extjs_pivotgrid_1 = extjs_pivotgrid_1_1;
            },
            function (sales_store_1_1) {
                sales_store_1 = sales_store_1_1;
            },
            function (simpsons_store_1_1) {
                simpsons_store_1 = simpsons_store_1_1;
            },
            function (forum_store_1_1) {
                forum_store_1 = forum_store_1_1;
            },
            function (simpsons_model_1_1) {
                simpsons_model_1 = simpsons_model_1_1;
            }],
        execute: function() {
            ExtAngularComponent = (function () {
                function ExtAngularComponent() {
                    this.n = 1;
                    //**********************************************
                    //**********************************************
                    this.buttonConfigHello = { width: 200 };
                    this.gridSimpsonsConstruct();
                    this.gridForumConstruct();
                    this.gridSalesConstruct();
                    this.pivotGridConstruct();
                }
                ExtAngularComponent.prototype.pivotGridConstruct = function () {
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
                ExtAngularComponent.prototype.onPivotDone = function (event) {
                    console.log('pivotdone', event);
                };
                ExtAngularComponent.prototype.gridSimpsonsConstruct = function () {
                    this.titleSimpsons = 'Simpsons';
                    this.columnsSimpsons = [
                        { text: 'Name', width: 100, sortable: false, hideable: false, dataIndex: 'name' },
                        { text: 'Email Address', flex: 1, dataIndex: 'email', renderer: function (value) {
                                return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
                            }
                        },
                        { text: 'Phone Number', width: 150, dataIndex: 'phone' }
                    ];
                    this.selModelSimpsons = {};
                    this.storeSimpsons = new simpsons_store_1.SimpsonsStore({}).extjsObject;
                    this.configSimpsons = {};
                };
                ExtAngularComponent.prototype.onGridSelectSimpsons = function (event) {
                    console.log('select', event);
                    this.email = event.record.data.email;
                };
                ExtAngularComponent.prototype.onGridSelectionChangeSimpsons = function (event) {
                    console.log('selectionchange', event);
                };
                ExtAngularComponent.prototype.onGridBeforeCellClickSimpsons = function (event) {
                    console.log('beforecellclick', event);
                };
                ExtAngularComponent.prototype.onGridEnableSimpsons = function (event) {
                    console.log('enable', event);
                };
                ExtAngularComponent.prototype.onGridGenericSimpsons = function (event) {
                    console.log('generic', event);
                };
                ExtAngularComponent.prototype.onButtonClickHello = function (event) {
                    this.titleSimpsons = 'ya';
                    var user = new simpsons_model_1.SimpsonsModel({
                        name: 'Conan',
                        email: 'a@a.com',
                        phone: '555-555-5555'
                    });
                    user.extjsObject.changeName();
                    this.s = user.extjsObject.get('name');
                    user.changePhone();
                    this.p = user.extjsObject.get('phone');
                    console.log(user);
                    this.n = this.n + 100;
                    event.stopPropagation();
                };
                ExtAngularComponent.prototype.gridForumConstruct = function () {
                    this.titleForum = 'Forum Threads - Buffered Store and Renderer';
                    this.columnsForum = [
                        {
                            xtype: 'rownumberer',
                            width: 50,
                            sortable: false
                        },
                        {
                            tdCls: 'x-grid-cell-topic',
                            text: 'Topic',
                            dataIndex: 'title',
                            flex: 1,
                            renderer: function (value, p, record) {
                                return Ext.String.format('<a href="http://sencha.com/forum/showthread.php?p={1}" target="_blank">{0}</a>', value, record.getId());
                            },
                            sortable: false
                        },
                        {
                            text: 'Author',
                            dataIndex: 'username',
                            width: 100,
                            hidden: true,
                            sortable: false
                        },
                        {
                            text: 'Replies',
                            dataIndex: 'replycount',
                            align: 'center',
                            width: 70,
                            sortable: false
                        },
                        {
                            //id: 'last',
                            text: 'Last Post',
                            dataIndex: 'lastpost',
                            width: 130,
                            renderer: Ext.util.Format.dateRenderer('n/j/Y g:i A'),
                            sortable: false
                        }
                    ];
                    this.selModelForum = {
                        pruneRemoved: false,
                        type: 'spreadsheet',
                        //columnSelect: true,
                        rowSelect: true
                    };
                    this.storeForum = new forum_store_1.ForumStore({}).extjsObject;
                    this.configForum = {
                        margin: '0 0 5 0',
                        height: 400,
                        loadMask: true,
                        multiSelect: true,
                        viewConfig: {
                            trackOver: false,
                            emptyText: '<h1 style="margin:20px">No matching results</h1>'
                        }
                    };
                };
                ExtAngularComponent.prototype.onGridSelectForum = function (event) {
                    console.log(event);
                    this.email = event.record.data.email;
                };
                ExtAngularComponent.prototype.onGridSelectionChangeForum = function (event) {
                    console.log(event);
                };
                ExtAngularComponent.prototype.gridSalesConstruct = function () {
                    this.titleSales = 'Sales';
                    this.columnsSales = [
                        {
                            text: 'Orderid',
                            dataIndex: 'orderid'
                        },
                        {
                            text: 'Salesperson',
                            width: 125,
                            dataIndex: 'salesperson'
                        },
                        {
                            text: 'Amount',
                            dataIndex: 'amount'
                        },
                        {
                            text: 'Country',
                            width: 125,
                            dataIndex: 'country'
                        },
                        {
                            text: 'Orderdate',
                            width: 300,
                            dataIndex: 'orderdate'
                        },
                        {
                            text: 'Person - range',
                            width: 150,
                            dataIndex: 'person-range'
                        },
                        {
                            text: 'Year',
                            flex: 1,
                            dataIndex: 'year'
                        }
                    ];
                    this.selModelSales = {};
                    this.storeSales = new sales_store_1.SalesStore({}).extjsObject;
                    this.configSales = {
                        margin: '0 0 5 0',
                        height: 400,
                        loadMask: true,
                        multiSelect: true,
                        viewConfig: {
                            trackOver: false,
                            emptyText: '<h1 style="margin:20px">No matching results</h1>'
                        }
                    };
                };
                ExtAngularComponent.prototype.onGridSelectSales = function (event) {
                    console.log(event);
                    this.email = event.record.data.email;
                };
                ExtAngularComponent.prototype.onGridSelectionChangeSales = function (event) {
                    console.log(event);
                };
                ExtAngularComponent = __decorate([
                    core_1.Component({
                        directives: [extjs_button_1.ExtJSButton, extjs_grid_1.ExtJSGrid, extjs_pivotgrid_1.ExtJSPivotGrid],
                        selector: 'extangular',
                        template: "\n\t\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<h3>ExtJS Simpsons Grid</h3>\n\t\t\t\t<extjs-grid #theGridSimpsons\n\t\t\t\t\tfit\n\t\t\t\t\t[(title)]=\"titleSimpsons\"\n\t\t\t\t\t[columns]= \"columnsSimpsons\" \n\t\t\t\t\t[selModel]=\"selModelSimpsons\"\n\t\t\t\t\t[store]=\"storeSimpsons\"\n\t\t\t\t\t(select)=\"onGridSelectSimpsons($event)\"\n\t\t\t\t\t(selectionchange)=\"onGridSelectionChangeSimpsons($event)\"\n\t\t\t\t\t(beforecellclick)=\"onGridBeforeCellClickSimpsons($event)\"\n\t\t\t\t\t(enable)=\"onGridEnableSimpsons($event)\"\n\t\t\t\t\t(headerclick)=\"onGridGenericSimpsons($event)\"\n\t\t\t\t></extjs-grid>\n\n\t\t\t\t<br/>Selected email: {{email}}\n\n\t\t\t\t<br/><br/>\n\t\t\t\t<extjs-button \n\t\t\t\t\txfit \n\t\t\t\t\t[config]=\"buttonConfigHello\"\n\t\t\t\t\t[text]=\"'hello'\" \n\t\t\t\t\t(click)=\"onButtonClickHello($event)\" \n\t\t\t\t></extjs-button>\n\t\t\t\t<br/>{{n}}\n\t\t\t\t<br/>{{s}}\n\t\t\t\t<br/>{{p}}\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<h3>ExtJS Forum Grid</h3> \n\n\t\t\t\t<extjs-grid #theGridForum\n\t\t\t\t\t[(title)]=\"titleForum\"\n\t\t\t\t\t[columns]= \"columnsForum\" \n\t\t\t\t\t[selModel]=\"selModelForum\"\n\t\t\t\t\t[store]=\"storeForum\"\n\t\t\t\t\t(select)=\"onGridSelectForum($event)\"\n\t\t\t\t\t(selectionchange)=\"onGridSelectionChangeForum($event)\"\n\t\t\t\t></extjs-grid>\n\t\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<br/><br/>\n\t\t\t\t<extjs-grid #theGridSales\n\t\t\t\t\t[(title)]=\"titleSales\"\n\t\t\t\t\t[columns]= \"columnsSales\" \n\t\t\t\t\t[selModel]=\"selModelSales\"\n\t\t\t\t\t[store]=\"storeSales\"\n\t\t\t\t\t(select)=\"onGridSelectSales($event)\"\n\t\t\t\t\t(selectionchange)=\"onGridSelectionChangeSales($event)\"\n\t\t\t\t></extjs-grid>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<br/><br/>\n\t\t\t\t<extjs-pivotgrid #thePivotGrid\n\t\t\t\t\t[(title)]=\"titlePivotGrid\"\n\t\t\t\t\t[leftAxis]=\"leftAxisPivotGrid\" \n\t\t\t\t\t[topAxis]=\"topAxisPivotGrid\" \n\t\t\t\t\t[leftAxis]=\"leftAxisPivotGrid\" \n\t\t\t\t\t[aggregate]=\"aggregatePivotGrid\"\n\t\t\t\t\t[store]=\"storePivotGrid\"\n\t\t\t\t\t(pivotdone)=\"onPivotDone($event)\"\n\t\t\t\t></extjs-pivotgrid>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExtAngularComponent);
                return ExtAngularComponent;
            }());
            exports_1("ExtAngularComponent", ExtAngularComponent);
        }
    }
});
// this.selModelSimpsons = {
// 	type: 'spreadsheet',
// 	rowSelect: true,
// 	columnSelect: true,
// 	cellSelect: true, 
// 	extensible: true
// };
// setTimeout(function() {
//   console.log(that.n);
//   that.n = that.n + 10;
// 	console.log(that.n);
// }, 1000);
//}
// public store:any = {
// 	xtype: 'store',
// 	fields: [ 'name', 'email', 'phone' ],
// 	data: [
// 		{ name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
// 		{ name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
// 		{ name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
// 		{ name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
// 	]
// };
//# sourceMappingURL=extangular.component.js.map