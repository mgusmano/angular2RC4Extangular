import { Component } from '@angular/core';
import { RouteConfig, Route, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { HomeComponent } from '../home/home.component';
import { PivotComponent } from '../pivot/pivot.component';
import { ExtAngularComponent } from '../extangular/extangular.component';

@RouteConfig([
	new Route({ path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true }),
	new Route({ path: 'pivot', name: 'Pivot', component: PivotComponent }),
	new Route({ path: '/extangular', name: 'ExtAngular', component: ExtAngularComponent })
])

@Component({
	selector: 'my-app',
	directives: [ ROUTER_DIRECTIVES ],
	styles:  [`
		/*!
		* Start Bootstrap - Simple Sidebar HTML Template (http://startbootstrap.com)
		* Code licensed under the Apache License v2.0.
		* For details, see http://www.apache.org/licenses/LICENSE-2.0.
		*/

		/* Toggle Styles */

		#wrapper {
				padding-left: 0;
				-webkit-transition: all 0.5s ease;
				-moz-transition: all 0.5s ease;
				-o-transition: all 0.5s ease;
				transition: all 0.5s ease;
		}

		#wrapper.toggled {
				padding-left: 171px;
		}

		#sidebar-wrapper {
				z-index: 1000;
				position: fixed;
				left: 171px;
				width: 0;
				height: 100%;
				margin-left: -171px;
				overflow-y: auto;
				background: #404040;
				-webkit-transition: all 0.5s ease;
				-moz-transition: all 0.5s ease;
				-o-transition: all 0.5s ease;
				transition: all 0.5s ease;
		}

		#wrapper.toggled #sidebar-wrapper {
				width: 171px;
		}

		#page-content-wrapper {
				width: 100%;
				position: absolute;
				padding: 15px;
		}

		#wrapper.toggled #page-content-wrapper {
				position: absolute;
				margin-right: -171px;
		}

		/* Sidebar Styles */

		.sidebar-nav {
				position: absolute;
				top: 0;
				width: 171px;
				margin: 0;
				padding: 0;
				list-style: none;
		}

		.sidebar-nav li {
				text-indent: 20px;
				line-height: 40px;
		}

		.sidebar-nav li a {
				padding: 23px;
				margin-left: -30px;
				font-size:18px;
				display: block;
				text-decoration: none;
				color: #acacac !important;
		}

		.sidebar-nav li a:hover {
				text-decoration: none;
				color: gray;
				background: rgba(255,255,255,0.2);
		}

		.icon {
			font-size:24px !important;
			width: 44px;
		}

		.x-tab-inner-navigation {
				font: bold 15px/19px 'Open Sans', 'Helvetica Neue', helvetica, arial, verdana, sans-serif;
				color: #acacac;
				max-width: 100%;
		}

		.sidebar-nav li a:active,
		.sidebar-nav li a:focus {
				text-decoration: none;
		}

		.sidebar-nav > .sidebar-brand {

				background-color: #5fa2dd;
				height: 96px;
				padding-top: 17px;
				margin-left: -10px;
				color: white;
				font-size: 22px;
				font-weight: bold;
				line-height: 60px;
		}

		.sidebar-nav > .sidebar-brand a {
				color: white;
		}

		.sidebar-nav > .sidebar-brand a:hover {
				color: #fff;
				background: none;
		}

		@media(min-width:768px) {
				#wrapper {
						padding-left: 171px;
				}

				#wrapper.toggled {
						padding-left: 0;
				}

				#sidebar-wrapper {
						width: 171px;
				}

				#wrapper.toggled #sidebar-wrapper {
						width: 0;
				}

				#page-content-wrapper {
						padding: 20px;
						position: relative;
						background-color: white;
				}

				#wrapper.toggled #page-content-wrapper {
						position: relative;
						margin-right: 0;
				}
		}
	`],
	template: `
		<div id="wrapper">
		<div id="sidebar-wrapper">
				<ul class="sidebar-nav">
					<li class="sidebar-brand"><span class="fa fa-th-list fa-w"></span><span>  Angular 2</span></li>
					<li><a [routerLink]="['Home']"><span class="fa fa-home icon"></span><span class="x-tab-inner-navigation">  Home</span></a></li>
					<li><a [routerLink]="['Pivot']" ><span class="fa fa-user icon"></span><span class="x-tab-inner-navigation">  Pivot</span></a></li>
					<li><a [routerLink]="['ExtAngular']" ><span class="fa fa-cog icon"></span><span class="x-tab-inner-navigation">  ExtAngular</span></a></li>
				</ul>
		</div>
		<div id="page-content-wrapper">
			<div class="container-fluid">
				<router-outlet></router-outlet>
			</div>
		</div>
	</div>
	`
})

export class MainComponent {
}


		// <extjs-layout [type] = "border">
		// 	<ext-component [region] = "top"></ext-component>
		// 	<ext-menu [region] = "west"></ext-menu>
		// 	<ext-panel [region] = "center"></ext-panel>
		// 	<ext-component [region] = "east"></ext-component>
		// 	<ext-component [region] = "bottom"></ext-component>
		// </ext-layout>
	