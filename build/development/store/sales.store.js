System.register(['../extjs-angular2/extjs.class'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var extjs_class_1;
    var SalesStore;
    return {
        setters:[
            function (extjs_class_1_1) {
                extjs_class_1 = extjs_class_1_1;
            }],
        execute: function() {
            SalesStore = (function (_super) {
                __extends(SalesStore, _super);
                function SalesStore(createConfig) {
                    var className = 'SalesStore';
                    var extend = 'Ext.data.ArrayStore';
                    var defineConfig = {
                        autoLoad: true,
                        proxy: {
                            type: 'ajax',
                            url: 'data/sales.json',
                            reader: {
                                type: 'json',
                                rootProperty: 'rows'
                            }
                        },
                        filters: [
                            function (item) {
                                return item.get('year') >= 2012;
                            }
                        ],
                        fields: [
                            { name: 'orderid', type: 'int' },
                            { name: 'salesperson', type: 'string' },
                            { name: 'country', type: 'string' },
                            { name: 'orderdate', type: 'date', dateFormat: 'd/m/Y' },
                            { name: 'amount', type: 'int' },
                            {
                                name: 'person-range',
                                convert: function (v, record) {
                                    if (/^[a-j]/i.test(record.get('salesperson')))
                                        return 'A-J';
                                    if (/^[k-s]/i.test(record.get('salesperson')))
                                        return 'K-S';
                                    if (/^[t-z]/i.test(record.get('salesperson')))
                                        return 'T-Z';
                                    return v;
                                }
                            }, {
                                name: 'year',
                                convert: function (v, record) {
                                    return Ext.Date.format(record.get('orderdate'), "Y");
                                }
                            }
                        ]
                    };
                    _super.call(this, className, extend, defineConfig, createConfig);
                    return;
                }
                return SalesStore;
            }(extjs_class_1.ExtJSClass));
            exports_1("SalesStore", SalesStore);
        }
    }
});
//# sourceMappingURL=sales.store.js.map