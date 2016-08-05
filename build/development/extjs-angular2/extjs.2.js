System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var ExtJS2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ExtJS2 = (function () {
                function ExtJS2(myElement, xtype) {
                    this.tapEvent = new core_1.EventEmitter();
                    this.rootElement = myElement.nativeElement;
                    this.xtype = xtype;
                }
                ExtJS2.prototype.ngOnInit = function () {
                    this.createExtJSObject(this.xtype, this.config);
                };
                ExtJS2.prototype.createExtJSObject = function (xtype, config) {
                    var me = this;
                    if (me.rootElement.childElementCount === 0) {
                        Ext.onReady(function () {
                            var configCommon = {
                                xtype: xtype,
                                //fit: me.fit,
                                //listeners: me.listeners,
                                renderTo: me.rootElement,
                                plugins: ['fittoparent']
                            };
                            //Ext.apply(config.listeners,me.listeners);
                            Ext.apply(me.config, configCommon);
                            //me.extJSObject = Ext.create(me.config);
                            var o = {
                                xtype: 'button',
                                renderTo: me.rootElement,
                                plugins: ['fittoparent'],
                                text: 'Click Me',
                                listeners: {
                                    //scope: this,
                                    tap: function (o, e, eOpts) {
                                        me.tapEvent.emit({
                                            o: o,
                                            e: e,
                                            eOpts: eOpts
                                        });
                                    }
                                }
                            };
                            Ext.create(o);
                            //if (me.rootElement.id != '') {
                            //  Ext[me.rootElement.id] = me.extJSObject;
                            //}
                            //me.complete.next({extJSObject: me.extJSObject})
                        });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ExtJS2.prototype, "config", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ExtJS2.prototype, "theVar", void 0);
                __decorate([
                    core_1.Output('thetap'), 
                    __metadata('design:type', Object)
                ], ExtJS2.prototype, "tapEvent", void 0);
                ExtJS2 = __decorate([
                    core_1.Component({
                        selector: 'extjs-2',
                        template: ""
                    }),
                    __param(1, core_1.Attribute('xtype')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, Object])
                ], ExtJS2);
                return ExtJS2;
            }());
            exports_1("ExtJS2", ExtJS2);
        }
    }
});
// 	<!--
// <extjs (thetap)="onTap($event)" style="width:100px;height:100px;" 
//[theVar]="theVar" width='100px' height='100px' xtype="button" [config]="buttonConfig"></extjs>
// -->
//# sourceMappingURL=extjs.2.js.map