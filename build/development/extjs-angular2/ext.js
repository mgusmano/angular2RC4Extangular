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
    var Ext;
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
            //import {ExtJSGrid} from './extjs.grid';
            Ext = (function (_super) {
                __extends(Ext, _super);
                function Ext(myElement, xtype, fit) {
                    var _this = this;
                    _super.call(this, myElement, fit);
                    //@ViewChildren(ExtJSGrid)
                    //extjsComponents: QueryList<ExtJSGrid>;
                    //ngAfterViewInit() {
                    //	console.log('ngAfterViewInit');
                    //}
                    this.config = {};
                    this.theEvents = [];
                    this.listeners = {};
                    this.xtype = xtype;
                    this.myElement = myElement;
                    this['ready'] = new core_1.EventEmitter();
                    console.log(parent);
                    var me = this;
                    me.theEvents = extjs_events_1.ExtJSEvents[me.xtype];
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
                    // ExtJSEvents[me.xtype].forEach( (event, n) => {
                    // 	(<any>this)[event.name] = new EventEmitter();
                    // 	me.listeners[event.name] = function() {
                    // 			let parameters = event.parameters[n];
                    // 			let parms = parameters.split(',');
                    // 			let args = Array.prototype.slice.call(arguments);
                    // 			let o: any = {};
                    // 			for (let i = 0, j = parms.length; i < j; i++ ) {
                    // 				if (parms[i] !== 'eOpts') {
                    // 					o[parms[i]] = args[i];
                    // 				}
                    // 			}
                    // 			me[event.name].next(o);
                    // 	};
                    // });
                }
                Ext.prototype.ngOnInit = function () {
                    var me = this;
                    //debugger;	
                    if (me.rootElement.childElementCount === 0) {
                        var o = {
                            xtype: me.xtype
                        };
                        if (me.fit === true) {
                            o.plugins = ['fittoparent'];
                        }
                        else {
                            o.height = 300;
                        }
                        ;
                        if (me.config !== {}) {
                            Ext.apply(o, me.config);
                        }
                        ;
                        //me.extjsObject = Ext.create(o);
                        debugger;
                        //if (me.rootElement.parentNode.nodeName === 'EXTJS') {
                        if (me.rootElement.parentNode === null) {
                            me.extjsObject = Ext.create(o);
                        }
                        else {
                            o.renderTo = me.rootElement;
                            me.extjsObject = Ext.create(o);
                        }
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Ext.prototype, "config", void 0);
                Ext = __decorate([
                    core_1.Component({
                        //directives: [ ExtJSGrid ],
                        selector: 'extjs',
                        outputs: [
                            'ready'
                        ],
                        template: ""
                    }),
                    __param(1, core_1.Attribute('xtype')),
                    __param(2, core_1.Attribute('fit')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, Object, Object])
                ], Ext);
                return Ext;
            }(extjs_base_1.ExtJSBase));
            exports_1("Ext", Ext);
        }
    }
});
//# sourceMappingURL=ext.js.map