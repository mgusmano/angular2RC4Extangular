import { AfterViewInit, Query, Host, ViewQuery, QueryList, ViewChildren, Component, Input, OnInit, ElementRef, EventEmitter, Attribute } from '@angular/core';
//import { ExtJSBase } from './extjs.base';
import { ExtJSEvents } from './extjs.events';
//import {ExtJSGrid} from './extjs.grid';

@Component({
	directives: [ ExtJS ],
	selector: 'extjs',
	outputs: [
		'ready'
	],
	template: ``
})
export class ExtJS implements OnInit {
	@ViewChildren(ExtJS)
  extjsComponents: QueryList<ExtJS>;
	extJSChildren: any;
	
	public extjsObject: any;
	private rootElement: any;
	private fit: boolean = false;
	
	@Input() private config: any = {};
	private xtype: any;
	private theEvents: any = [];
	private myElement: any;
	
	private listeners = {};

//, @Host(ExtJS) application: Application

	constructor(myElement: ElementRef, @Attribute('xtype') xtype: any, @Attribute('fit') fit: any, 
							@Query(ExtJS) extJSChildren : QueryList<ExtJS> ) {
								
		if (fit === null) {
			this.fit = false;
		} else {
			this.fit = true;
		}
		this.rootElement = myElement.nativeElement;

		//super(myElement, fit, xtype);
		this.extJSChildren = extJSChildren;
		this.xtype = xtype;
		this.myElement = myElement;
		
		
		this['ready'] = new EventEmitter();
		let me = this;
		me.theEvents = ExtJSEvents[me.xtype];
		me.theEvents.forEach( (event, n) => {
			(<any>this)[event.name] = new EventEmitter();
			me.listeners[event.name] = function() {
					let parameters = me.theEvents[n].parameters;
					let parms = parameters.split(',');
					let args = Array.prototype.slice.call(arguments);
					let o: any = {};
					for (let i = 0, j = parms.length; i < j; i++ ) {
						if (parms[i] !== 'eOpts') {
							o[parms[i]] = args[i];
						}
					}
					me[event.name].next(o);
			};
		});
	}
	
	public ngOnInit() {
	}

	public ngAfterViewInit() {
		let me: any  = this;
		
		if (me.rootElement.childElementCount === 0 ) {
			let o: any = {
				xtype: me.xtype
			};
			if (me.fit === true ) {o.plugins = ['fittoparent']; } else {o.height = 300; };
			if (me.config !== {} ) {
				Ext.apply(o, me.config);
			};

			//if (me.rootElement.parentNode.nodeName === 'EXTJS') {
			if ( me.rootElement.parentNode === null ) {
				me.extjsObject = Ext.create(o);
			}
			else {
				o.renderTo =  me.rootElement
				me.extjsObject = Ext.create(o);
				for ( let i = 1; i < me.extJSChildren._results.length; i++) {
					me.extjsObject.add(me.extJSChildren._results[i].extjsObject);
				}
			}
			//me.ready.next(me);
		}
	}

}
