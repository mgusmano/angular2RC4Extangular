System.register(['@angular/platform-browser-dynamic', '@angular/core', '@angular/router-deprecated', './view/main/main.component', './service/sales.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, router_deprecated_1, main_component_1, sales_service_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (sales_service_1_1) {
                sales_service_1 = sales_service_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            platform_browser_dynamic_1.bootstrap(main_component_1.MainComponent, [sales_service_1.SalesService, router_deprecated_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=app.js.map