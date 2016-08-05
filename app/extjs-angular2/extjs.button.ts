import { Directive, Input, Output, OnInit, ElementRef, EventEmitter, Attribute } from '@angular/core';
import { ExtJSBase } from './extjs.base';

@Directive({
	selector: 'extjs-button',
	inputs: [ 'config', 'text'],
	outputs: ['click']
})
export class ExtJSButton extends ExtJSBase implements OnInit {
	private text: string;
	private click: EventEmitter<any> = new EventEmitter();

	constructor(myElement: ElementRef, @Attribute('fit') fit: any) {
		super(myElement, fit);
	}

	public ngOnInit() {
		let me: any  = this;
		if (me.rootElement.childElementCount === 0) {
			let o: any = {
				xtype: 'button',
				renderTo: me.rootElement,

				text: me.text,
				listeners: {
					scope: me,
					click: function(o, e, eOpts) {
						//me.exttap.emit({});
						me.click.next();

						// setTimeout(function() {
						// 	me.exttap.emit({})
						// }, 1000);
						// me.exttap.emit({
						// 	o: o,
						// 	e: e,
						// 	eOpts: eOpts
						// })
					}
				}
			};
			if (me.fit === true) {o.plugins = [ 'fittoparent' ]; } else {o.height = 30; };
			if (me.config !== {} ) {
				Ext.apply(o, me.config);
			};
			Ext.create(o);
		}

		// setTimeout(function() {
		// 	me.exttap.emit({})
		// }, 5000);

		// let iDiv = document.createElement('div');
		// iDiv.innerHTML = "hello";
		// iDiv.addEventListener('click', function (event) {
		// 	me.exttap.emit({});
		// });
		// me.rootElement.appendChild(iDiv);

	}

}
