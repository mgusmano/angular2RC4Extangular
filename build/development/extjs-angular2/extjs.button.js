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
    var ExtJSButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (extjs_base_1_1) {
                extjs_base_1 = extjs_base_1_1;
            }],
        execute: function() {
            ExtJSButton = (function (_super) {
                __extends(ExtJSButton, _super);
                function ExtJSButton(myElement, fit) {
                    _super.call(this, myElement, fit);
                    this.click = new core_1.EventEmitter();
                }
                ExtJSButton.prototype.ngOnInit = function () {
                    var me = this;
                    if (me.rootElement.childElementCount === 0) {
                        var o = {
                            xtype: 'button',
                            renderTo: me.rootElement,
                            text: me.text,
                            listeners: {
                                scope: me,
                                click: function (o, e, eOpts) {
                                    //me.exttap.emit({});
                                    me.click.next();
                                    // setTimeout(function() {
                                    // 	me.exttap.emit({})
                                    // }, 1000);
                                    // me.exttap.emit({
                                    // 	o: o,
                                    // 	e: e,
                                    // 	eOpts: eOpts
                                    // })
                                }
                            }
                        };
                        if (me.fit === true) {
                            o.plugins = ['fittoparent'];
                        }
                        else {
                            o.height = 30;
                        }
                        ;
                        if (me.config !== {}) {
                            Ext.apply(o, me.config);
                        }
                        ;
                        Ext.create(o);
                    }
                    // setTimeout(function() {
                    // 	me.exttap.emit({})
                    // }, 5000);
                    // let iDiv = document.createElement('div');
                    // iDiv.innerHTML = "hello";
                    // iDiv.addEventListener('click', function (event) {
                    // 	me.exttap.emit({});
                    // });
                    // me.rootElement.appendChild(iDiv);
                };
                ExtJSButton = __decorate([
                    core_1.Directive({
                        selector: 'extjs-button',
                        inputs: ['config', 'text'],
                        outputs: ['click']
                    }),
                    __param(1, core_1.Attribute('fit')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, Object])
                ], ExtJSButton);
                return ExtJSButton;
            }(extjs_base_1.ExtJSBase));
            exports_1("ExtJSButton", ExtJSButton);
        }
    }
});
//# sourceMappingURL=extjs.button.js.map