System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ExtJSBase;
    return {
        setters:[],
        execute: function() {
            ExtJSBase = (function () {
                //constructor(myElement: ElementRef, @Attribute('fit') fit: any) {
                function ExtJSBase(myElement, fit) {
                    this.fit = false;
                    if (fit === null) {
                        this.fit = false;
                    }
                    else {
                        this.fit = true;
                    }
                    //console.log(this.fit);
                    this.rootElement = myElement.nativeElement;
                }
                return ExtJSBase;
            }());
            exports_1("ExtJSBase", ExtJSBase);
        }
    }
});
//# sourceMappingURL=extjs.base.js.map