System.register(['./mock-sales', '@angular/core'], function(exports_1, context_1) {
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
    var mock_sales_1, core_1;
    var SalesService;
    return {
        setters:[
            function (mock_sales_1_1) {
                mock_sales_1 = mock_sales_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SalesService = (function () {
                function SalesService() {
                }
                SalesService.prototype.getSales = function () {
                    var sort_by;
                    (function () {
                        // utility functions
                        var default_cmp = function (a, b) {
                            if (a == b)
                                return 0;
                            return a < b ? -1 : 1;
                        }, getCmpFunc = function (primer, reverse) {
                            var dfc = default_cmp, // closer in scope
                            cmp = default_cmp;
                            if (primer) {
                                cmp = function (a, b) {
                                    return dfc(primer(a), primer(b));
                                };
                            }
                            if (reverse) {
                                return function (a, b) {
                                    return -1 * cmp(a, b);
                                };
                            }
                            return cmp;
                        };
                        // actual implementation
                        sort_by = function () {
                            var fields = [], n_fields = arguments.length, field, name, reverse, cmp;
                            // preprocess sorting options
                            for (var i = 0; i < n_fields; i++) {
                                field = arguments[i];
                                if (typeof field === 'string') {
                                    name = field;
                                    cmp = default_cmp;
                                }
                                else {
                                    name = field.name;
                                    cmp = getCmpFunc(field.primer, field.reverse);
                                }
                                fields.push({
                                    name: name,
                                    cmp: cmp
                                });
                            }
                            // final comparison function
                            return function (A, B) {
                                var a, b, name, result;
                                for (var i = 0; i < n_fields; i++) {
                                    result = 0;
                                    field = fields[i];
                                    name = field.name;
                                    result = field.cmp(A[name], B[name]);
                                    if (result !== 0)
                                        break;
                                }
                                return result;
                            };
                        };
                    }());
                    mock_sales_1.SALES.sort(sort_by('salesperson', 'country'));
                    return Promise.resolve(mock_sales_1.SALES);
                };
                SalesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SalesService);
                return SalesService;
            }());
            exports_1("SalesService", SalesService);
        }
    }
});
//# sourceMappingURL=sales.service.js.map