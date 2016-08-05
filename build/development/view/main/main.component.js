System.register(['@angular/core', '@angular/router-deprecated', '../home/home.component', '../pivot/pivot.component', '../extangular/extangular.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, home_component_1, pivot_component_1, extangular_component_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (pivot_component_1_1) {
                pivot_component_1 = pivot_component_1_1;
            },
            function (extangular_component_1_1) {
                extangular_component_1 = extangular_component_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                }
                MainComponent = __decorate([
                    router_deprecated_1.RouteConfig([
                        new router_deprecated_1.Route({ path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true }),
                        new router_deprecated_1.Route({ path: 'pivot', name: 'Pivot', component: pivot_component_1.PivotComponent }),
                        new router_deprecated_1.Route({ path: '/extangular', name: 'ExtAngular', component: extangular_component_1.ExtAngularComponent })
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        styles: ["\n\t\t/*!\n\t\t* Start Bootstrap - Simple Sidebar HTML Template (http://startbootstrap.com)\n\t\t* Code licensed under the Apache License v2.0.\n\t\t* For details, see http://www.apache.org/licenses/LICENSE-2.0.\n\t\t*/\n\n\t\t/* Toggle Styles */\n\n\t\t#wrapper {\n\t\t\t\tpadding-left: 0;\n\t\t\t\t-webkit-transition: all 0.5s ease;\n\t\t\t\t-moz-transition: all 0.5s ease;\n\t\t\t\t-o-transition: all 0.5s ease;\n\t\t\t\ttransition: all 0.5s ease;\n\t\t}\n\n\t\t#wrapper.toggled {\n\t\t\t\tpadding-left: 171px;\n\t\t}\n\n\t\t#sidebar-wrapper {\n\t\t\t\tz-index: 1000;\n\t\t\t\tposition: fixed;\n\t\t\t\tleft: 171px;\n\t\t\t\twidth: 0;\n\t\t\t\theight: 100%;\n\t\t\t\tmargin-left: -171px;\n\t\t\t\toverflow-y: auto;\n\t\t\t\tbackground: #404040;\n\t\t\t\t-webkit-transition: all 0.5s ease;\n\t\t\t\t-moz-transition: all 0.5s ease;\n\t\t\t\t-o-transition: all 0.5s ease;\n\t\t\t\ttransition: all 0.5s ease;\n\t\t}\n\n\t\t#wrapper.toggled #sidebar-wrapper {\n\t\t\t\twidth: 171px;\n\t\t}\n\n\t\t#page-content-wrapper {\n\t\t\t\twidth: 100%;\n\t\t\t\tposition: absolute;\n\t\t\t\tpadding: 15px;\n\t\t}\n\n\t\t#wrapper.toggled #page-content-wrapper {\n\t\t\t\tposition: absolute;\n\t\t\t\tmargin-right: -171px;\n\t\t}\n\n\t\t/* Sidebar Styles */\n\n\t\t.sidebar-nav {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\twidth: 171px;\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t\tlist-style: none;\n\t\t}\n\n\t\t.sidebar-nav li {\n\t\t\t\ttext-indent: 20px;\n\t\t\t\tline-height: 40px;\n\t\t}\n\n\t\t.sidebar-nav li a {\n\t\t\t\tpadding: 23px;\n\t\t\t\tmargin-left: -30px;\n\t\t\t\tfont-size:18px;\n\t\t\t\tdisplay: block;\n\t\t\t\ttext-decoration: none;\n\t\t\t\tcolor: #acacac !important;\n\t\t}\n\n\t\t.sidebar-nav li a:hover {\n\t\t\t\ttext-decoration: none;\n\t\t\t\tcolor: gray;\n\t\t\t\tbackground: rgba(255,255,255,0.2);\n\t\t}\n\n\t\t.icon {\n\t\t\tfont-size:24px !important;\n\t\t\twidth: 44px;\n\t\t}\n\n\t\t.x-tab-inner-navigation {\n\t\t\t\tfont: bold 15px/19px 'Open Sans', 'Helvetica Neue', helvetica, arial, verdana, sans-serif;\n\t\t\t\tcolor: #acacac;\n\t\t\t\tmax-width: 100%;\n\t\t}\n\n\t\t.sidebar-nav li a:active,\n\t\t.sidebar-nav li a:focus {\n\t\t\t\ttext-decoration: none;\n\t\t}\n\n\t\t.sidebar-nav > .sidebar-brand {\n\n\t\t\t\tbackground-color: #5fa2dd;\n\t\t\t\theight: 96px;\n\t\t\t\tpadding-top: 17px;\n\t\t\t\tmargin-left: -10px;\n\t\t\t\tcolor: white;\n\t\t\t\tfont-size: 22px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tline-height: 60px;\n\t\t}\n\n\t\t.sidebar-nav > .sidebar-brand a {\n\t\t\t\tcolor: white;\n\t\t}\n\n\t\t.sidebar-nav > .sidebar-brand a:hover {\n\t\t\t\tcolor: #fff;\n\t\t\t\tbackground: none;\n\t\t}\n\n\t\t@media(min-width:768px) {\n\t\t\t\t#wrapper {\n\t\t\t\t\t\tpadding-left: 171px;\n\t\t\t\t}\n\n\t\t\t\t#wrapper.toggled {\n\t\t\t\t\t\tpadding-left: 0;\n\t\t\t\t}\n\n\t\t\t\t#sidebar-wrapper {\n\t\t\t\t\t\twidth: 171px;\n\t\t\t\t}\n\n\t\t\t\t#wrapper.toggled #sidebar-wrapper {\n\t\t\t\t\t\twidth: 0;\n\t\t\t\t}\n\n\t\t\t\t#page-content-wrapper {\n\t\t\t\t\t\tpadding: 20px;\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\tbackground-color: white;\n\t\t\t\t}\n\n\t\t\t\t#wrapper.toggled #page-content-wrapper {\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\tmargin-right: 0;\n\t\t\t\t}\n\t\t}\n\t"],
                        template: "\n\t\t<div id=\"wrapper\">\n\t\t<div id=\"sidebar-wrapper\">\n\t\t\t\t<ul class=\"sidebar-nav\">\n\t\t\t\t\t<li class=\"sidebar-brand\"><span class=\"fa fa-th-list fa-w\"></span><span>  Angular 2</span></li>\n\t\t\t\t\t<li><a [routerLink]=\"['Home']\"><span class=\"fa fa-home icon\"></span><span class=\"x-tab-inner-navigation\">  Home</span></a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['Pivot']\" ><span class=\"fa fa-user icon\"></span><span class=\"x-tab-inner-navigation\">  Pivot</span></a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['ExtAngular']\" ><span class=\"fa fa-cog icon\"></span><span class=\"x-tab-inner-navigation\">  ExtAngular</span></a></li>\n\t\t\t\t</ul>\n\t\t</div>\n\t\t<div id=\"page-content-wrapper\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});
// <extjs-layout [type] = "border">
// 	<ext-component [region] = "top"></ext-component>
// 	<ext-menu [region] = "west"></ext-menu>
// 	<ext-panel [region] = "center"></ext-panel>
// 	<ext-component [region] = "east"></ext-component>
// 	<ext-component [region] = "bottom"></ext-component>
// </ext-layout>
//# sourceMappingURL=main.component.js.map