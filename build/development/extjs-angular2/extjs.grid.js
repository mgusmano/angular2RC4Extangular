System.register(['@angular/core', './extjs.base', './extjs.events'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, extjs_base_1, extjs_events_1;
    var ExtJSGrid;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (extjs_base_1_1) {
                extjs_base_1 = extjs_base_1_1;
            },
            function (extjs_events_1_1) {
                extjs_events_1 = extjs_events_1_1;
            }],
        execute: function() {
            ExtJSGrid = (function (_super) {
                __extends(ExtJSGrid, _super);
                // private EVENTS = [
                // 	'select',
                // 	'selectionchange',
                // 	'beforecellclick',
                // 	'enable',
                // 	'headerclick'
                // ]
                // private PARAMETERS = [
                // 	'this,record,index,eOpts',
                // 	'this,selected,eOpts',
                // 	'this,td,cellIndex,record,tr,rowIndex,e,eOpts',
                // 	'this,eOpts',
                // 	'ct,column,e,t,eOpts'
                // ]
                function ExtJSGrid(myElement, fit) {
                    var _this = this;
                    _super.call(this, myElement, fit);
                    this.title = '';
                    this.columns = {};
                    this.selModel = {};
                    this.store = {};
                    this.config = {};
                    this.theEvents = [];
                    this.listeners = {};
                    // // create all the events generically. this is done generically so that
                    // // if the list of grid events change, we don't need to change this code.
                    //this.ready = new EventEmitter();
                    this['ready'] = new core_1.EventEmitter();
                    var me = this;
                    me.theEvents = extjs_events_1.ExtJSEvents['grid'];
                    me.theEvents.forEach(function (event, n) {
                        _this[event.name] = new core_1.EventEmitter();
                        me.listeners[event.name] = function () {
                            var parameters = me.theEvents[n].parameters;
                            var parms = parameters.split(',');
                            var args = Array.prototype.slice.call(arguments);
                            var o = {};
                            for (var i = 0, j = parms.length; i < j; i++) {
                                if (parms[i] !== 'eOpts') {
                                    o[parms[i]] = args[i];
                                }
                            }
                            me[event.name].next(o);
                        };
                    });
                }
                ExtJSGrid.prototype.ngOnChanges = function (changes) {
                    if (this.extjsObject !== undefined) {
                        this.extjsObject.setTitle(changes['title'].currentValue);
                    }
                };
                ExtJSGrid.prototype.ngOnInit = function () {
                    var me = this;
                    if (me.rootElement.childElementCount === 0) {
                        var o = {
                            xtype: 'grid',
                            renderTo: me.rootElement
                        };
                        if (me.fit === true) {
                            o.plugins = ['fittoparent'];
                        }
                        else {
                            o.height = 300;
                        }
                        ;
                        o.listeners = me.listeners;
                        if (me.title !== {}) {
                            o.title = me.title;
                        }
                        ;
                        o.columns = me.columns;
                        if (me.selModel !== {}) {
                            o.selModel = me.selModel;
                        }
                        ;
                        o.store = me.store;
                        if (me.config !== {}) {
                            Ext.apply(o, me.config);
                        }
                        ;
                        me.extjsObject = Ext.create(o);
                        me.ready.next(me);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ExtJSGrid.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ExtJSGrid.prototype, "columns", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ExtJSGrid.prototype, "selModel", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ExtJSGrid.prototype, "store", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ExtJSGrid.prototype, "config", void 0);
                ExtJSGrid = __decorate([
                    core_1.Component({
                        selector: 'extjs-grid',
                        outputs: [
                            'ready',
                            'select',
                            'selectionchange',
                            'beforecellclick',
                            'enable',
                            'headerclick'
                        ],
                        template: ""
                    }),
                    __param(1, core_1.Attribute('fit')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, Object])
                ], ExtJSGrid);
                return ExtJSGrid;
            }(extjs_base_1.ExtJSBase));
            exports_1("ExtJSGrid", ExtJSGrid);
        }
    }
});
//# sourceMappingURL=extjs.grid.js.map