import { Component, Input, Output, OnInit, ElementRef, Attribute, EventEmitter } from '@angular/core';

@Component({
	selector: 'extjs-2',
	template: ``
})

export class ExtJS2 implements OnInit {
	//@Input() xtype;
	@Input() private config: Object;
	@Input() private theVar: string;
	@Output('thetap') private tapEvent = new EventEmitter();

	private rootElement: any;
	private xtype: any;

	constructor(myElement: ElementRef, @Attribute('xtype') xtype: any) {
		this.rootElement = myElement.nativeElement;
		this.xtype = xtype;
	}

	public ngOnInit() {
		this.createExtJSObject(this.xtype, this.config);
	}

	private createExtJSObject(xtype, config) {
		let me: any  = this;
		if (me.rootElement.childElementCount === 0 ) {
			Ext.onReady(function() {
				let configCommon = {
					xtype: xtype,
					//fit: me.fit,
					//listeners: me.listeners,
					renderTo: me.rootElement,
					plugins: ['fittoparent']
				};
				//Ext.apply(config.listeners,me.listeners);
				Ext.apply(me.config, configCommon);
				//me.extJSObject = Ext.create(me.config);

				let o: any = {
					xtype: 'button',
					renderTo: me.rootElement,
					plugins: ['fittoparent'],

					text: 'Click Me',
					listeners: {
						//scope: this,
						tap: function(o, e, eOpts) {
							me.tapEvent.emit({
								o: o,
								e: e,
								eOpts: eOpts
							});
						}
					}

					// listeners: {
					// 	//scope: this,
					// 	click: 'theHandler'
					// 	//click: function() {
					// 	//	this.thelet = 'from ExtJS button click';
					// 	//}
					// },
					//theHandler: function(){alert('hi')}
					//handler: 'theHandler',
					//handler: function(){alert('hi')}
					//handler: this.onClickButton()
					//handler: function() {
					//	this.thelet = 'clicked';
					//}
				};
				Ext.create(o);

				//if (me.rootElement.id != '') {
				//  Ext[me.rootElement.id] = me.extJSObject;
				//}
				//me.complete.next({extJSObject: me.extJSObject})
			});
		}
	}

}




				// 	<!--
				// <extjs (thetap)="onTap($event)" style="width:100px;height:100px;" 
				//[theVar]="theVar" width='100px' height='100px' xtype="button" [config]="buttonConfig"></extjs>
				// -->
