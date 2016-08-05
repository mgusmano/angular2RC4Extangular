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
                    { name: 'select', parameters: 'this,record,index,eOpts' },
                    { name: 'selectionchange', parameters: 'this,selected,eOpts' },
                    { name: 'beforecellclick', parameters: 'this,td,cellIndex,record,tr,rowIndex,e,eOpts' },
                    { name: 'enable', parameters: 'this,eOpts' },
                    { name: 'headerclick', parameters: 'ct,column,e,t,eOpts' },
                ];
                ExtJSEvents.panel = [
                    { name: 'select', parameters: 'this,record,index,eOpts' },
                    { name: 'selectionchange', parameters: 'this,selected,eOpts' },
                    { name: 'beforecellclick', parameters: 'this,td,cellIndex,record,tr,rowIndex,e,eOpts' },
                    { name: 'enable', parameters: 'this,eOpts' },
                    { name: 'headerclick', parameters: 'ct,column,e,t,eOpts' },
                ];
                return ExtJSEvents;
            }());
            exports_1("ExtJSEvents", ExtJSEvents);
        }
    }
});
//# sourceMappingURL=extjs.events.js.map