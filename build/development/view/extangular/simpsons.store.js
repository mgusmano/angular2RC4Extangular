System.register(['../../extjs-angular2/extjs.class', './simpsons.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var extjs_class_1, simpsons_model_1;
    var SimpsonsStore;
    return {
        setters:[
            function (extjs_class_1_1) {
                extjs_class_1 = extjs_class_1_1;
            },
            function (simpsons_model_1_1) {
                simpsons_model_1 = simpsons_model_1_1;
            }],
        execute: function() {
            SimpsonsStore = (function (_super) {
                __extends(SimpsonsStore, _super);
                function SimpsonsStore(createConfig) {
                    var className = 'ext.simpsons.store';
                    var extend = 'Ext.data.Store';
                    var model = new simpsons_model_1.SimpsonsModel({});
                    var defineConfig = {
                        model: model.extjsObject,
                        data: [
                            { name: 'Lisa4', email: 'lisa@simpsons.com', phone: '555-111-1224' },
                            { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
                            { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
                            { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
                        ]
                    };
                    _super.call(this, className, extend, defineConfig, createConfig);
                    return;
                }
                return SimpsonsStore;
            }(extjs_class_1.ExtJSClass));
            exports_1("SimpsonsStore", SimpsonsStore);
        }
    }
});
//# sourceMappingURL=simpsons.store.js.map