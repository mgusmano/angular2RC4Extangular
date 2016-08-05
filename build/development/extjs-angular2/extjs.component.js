System.register(['@angular/core', './extjs.base'], function(exports_1, context_1) {
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
    var core_1, extjs_base_1;
    var ExtJSComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (extjs_base_1_1) {
                extjs_base_1 = extjs_base_1_1;
            }],
        execute: function() {
            ExtJSComponent = (function (_super) {
                __extends(ExtJSComponent, _super);
                //private listeners = {};
                // private PIVOTGRIDEVENTS = [
                // 	'cellclick',
                // 	'pivotdone',
                // 	'pivotgroupcellclick'
                // ]
                // private PIVOTGRIDPARAMETERS = [
                // 	'this, td, cellIndex, record, tr, rowIndex, e, eOpts',
                // 	'matrix,eOpts',
                // 	'params, e, eOpts'
                // ]
                function ExtJSComponent(myElement, fit) {
                    _super.call(this, myElement, fit);
                    this.config = {};
                    debugger;
                    // create all the events generically. this is done generically so that
                    // if the list of grid events change, we don't need to change this code.
                    //this.ready = new EventEmitter();
                    this['ready'] = new core_1.EventEmitter();
                    // let me = this;
                    // me.PIVOTGRIDEVENTS.forEach( (eventName, n) => {
                    // 	(<any>this)[eventName] = new EventEmitter();
                    // 	me.listeners[eventName] = function() {
                    // 			let parameters = me.PIVOTGRIDPARAMETERS[n];
                    // 			let parms = parameters.split(',');
                    // 			let args = Array.prototype.slice.call(arguments);
                    // 			let o: any = {};
                    // 			for (let i = 0, j = parms.length; i < j; i++ ) {
                    // 				if (parms[i] !== 'eOpts') {
                    // 					o[parms[i]] = args[i];
                    // 				}
                    // 			}
                    // 			me[eventName].next(o);
                    // 	};
                    // });
                    //console.log(me.listeners);
                }
                ExtJSComponent.prototype.ngOnInit = function () {
                    var me = this;
                    if (me.rootElement.childElementCount === 0) {
                        var o = {
                            //				xtype: 'pivotgrid',
                            renderTo: me.rootElement
                        };
                        if (me.fit === true) {
                            o.plugins = ['fittoparent'];
                        }
                        else {
                            o.height = 300;
                        }
                        ;
                        //o.listeners = me.listeners;
                        // if (me.title !== {} ) {o.title = me.title; };
                        // if (me.topAxis !== {} ) {o.topAxis = me.topAxis; };
                        // if (me.leftAxis !== {} ) {o.leftAxis = me.leftAxis; };
                        // if (me.aggregate !== {} ) {o.aggregate = me.aggregate; };
                        // o.store = me.store;
                        if (me.config !== {}) {
                            Ext.apply(o, me.config);
                        }
                        ;
                        debugger;
                        me.extjsObject = Ext.create(o);
                        me.ready.next(me);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ExtJSComponent.prototype, "config", void 0);
                ExtJSComponent = __decorate([
                    core_1.Component({
                        selector: 'extjs-component',
                        outputs: [
                            'ready'
                        ],
                        template: ""
                    }),
                    __param(1, core_1.Attribute('fit')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, Object])
                ], ExtJSComponent);
                return ExtJSComponent;
            }(extjs_base_1.ExtJSBase));
            exports_1("ExtJSComponent", ExtJSComponent);
        }
    }
});
//# sourceMappingURL=extjs.component.js.map