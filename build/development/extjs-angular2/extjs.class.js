System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ExtJSClass;
    return {
        setters:[],
        execute: function() {
            ExtJSClass = (function () {
                function ExtJSClass(className, extend, defineConfig, createConfig) {
                    if (!Ext.ClassManager.isCreated(className)) {
                        Ext.apply(defineConfig, { extend: extend });
                        Ext.define(className, defineConfig);
                    }
                    this.className = className;
                    this.extend = extend;
                    this.defineConfig = defineConfig;
                    this.createConfig = createConfig;
                    this.extjsObject = Ext.create(className, createConfig);
                }
                return ExtJSClass;
            }());
            exports_1("ExtJSClass", ExtJSClass);
        }
    }
});
//# sourceMappingURL=extjs.class.js.map