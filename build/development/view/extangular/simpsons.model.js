System.register(['../../extjs-angular2/extjs.class'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var extjs_class_1;
    var SimpsonsModel;
    return {
        setters:[
            function (extjs_class_1_1) {
                extjs_class_1 = extjs_class_1_1;
            }],
        execute: function() {
            SimpsonsModel = (function (_super) {
                __extends(SimpsonsModel, _super);
                function SimpsonsModel(createConfig) {
                    var className = 'ext.simpsons.model';
                    var extend = 'Ext.data.Model';
                    var defineConfig = {
                        fields: [
                            'name',
                            'email',
                            'phone'
                        ],
                        changeName: function () {
                            var oldName = this.get('name'), newName = oldName + ' The Barbarian';
                            this.set('name', newName);
                        }
                    };
                    _super.call(this, className, extend, defineConfig, createConfig);
                    return;
                }
                SimpsonsModel.prototype.changePhone = function () {
                    var oldPhone = this.extjsObject.get('phone'), newPhone = oldPhone + ' EXT 123';
                    this.extjsObject.set('phone', newPhone);
                };
                return SimpsonsModel;
            }(extjs_class_1.ExtJSClass));
            exports_1("SimpsonsModel", SimpsonsModel);
        }
    }
});
//# sourceMappingURL=simpsons.model.js.map