System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ExtJSEvents;
    return {
        setters:[],
        execute: function() {
            ExtJSEvents = (function () {
                function ExtJSEvents() {
                }
                ExtJSEvents.grid = [
                    { event: 'select', parameters: 'this,record,index,eOpts' },
                    { event: 'selectionchange', parameters: 'this,selected,eOpts' },
                    { event: 'beforecellclick', parameters: 'this,td,cellIndex,record,tr,rowIndex,e,eOpts' },
                    { event: 'enable', parameters: 'this,eOpts' },
                    { event: 'headerclick', parameters: 'ct,column,e,t,eOpts' },
                ];
                return ExtJSEvents;
            }());
            exports_1("ExtJSEvents", ExtJSEvents);
        }
    }
});
//# sourceMappingURL=extjs.events..js.map