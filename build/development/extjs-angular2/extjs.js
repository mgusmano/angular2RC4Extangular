System.register(['@angular/core', './extjs.events'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, extjs_events_1;
    var ExtJS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (extjs_events_1_1) {
                extjs_events_1 = extjs_events_1_1;
            }],
        execute: function() {
            //import {ExtJSGrid} from './extjs.grid';
            ExtJS = (function () {
                //, @Host(ExtJS) application: Application
                function ExtJS(myElement, xtype, fit, extJSChildren) {
                    var _this = this;
                    this.fit = false;
                    this.config = {};
                    this.theEvents = [];
                    this.listeners = {};
                    if (fit === null) {
                        this.fit = false;
                    }
                    else {
                        this.fit = true;
                    }
                    this.rootElement = myElement.nativeElement;
                    //super(myElement, fit, xtype);
                    this.extJSChildren = extJSChildren;
                    this.xtype = xtype;
                    this.myElement = myElement;
                    this['ready'] = new core_1.EventEmitter();
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
                }
                ExtJS.prototype.ngOnInit = function () {
                };
                ExtJS.prototype.ngAfterViewInit = function () {
                    var me = this;
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
                        //if (me.rootElement.parentNode.nodeName === 'EXTJS') {
                        if (me.rootElement.parentNode === null) {
                            me.extjsObject = Ext.create(o);
                        }
                        else {
                            o.renderTo = me.rootElement;
                            me.extjsObject = Ext.create(o);
                            for (var i = 1; i < me.extJSChildren._results.length; i++) {
                                me.extjsObject.add(me.extJSChildren._results[i].extjsObject);
                            }
                        }
                    }
                };
                __decorate([
                    core_1.ViewChildren(ExtJS), 
                    __metadata('design:type', core_1.QueryList)
                ], ExtJS.prototype, "extjsComponents", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ExtJS.prototype, "config", void 0);
                ExtJS = __decorate([
                    core_1.Component({
                        directives: [ExtJS],
                        selector: 'extjs',
                        outputs: [
                            'ready'
                        ],
                        template: ""
                    }),
                    __param(1, core_1.Attribute('xtype')),
                    __param(2, core_1.Attribute('fit')),
                    __param(3, core_1.Query(ExtJS)), 
                    __metadata('design:paramtypes', [core_1.ElementRef, Object, Object, core_1.QueryList])
                ], ExtJS);
                return ExtJS;
            }());
            exports_1("ExtJS", ExtJS);
        }
    }
});
//# sourceMappingURL=extjs.js.map