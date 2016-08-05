/// <reference path="../../typings/ext-6.0.1-classic/index.d.ts" />
import { ElementRef, EventEmitter } from '@angular/core';

export abstract class ExtJSBase {
	public extjsObject: any;
	//private config: any = {};
	private rootElement: any;
	private fit: boolean = false;

	//constructor(myElement: ElementRef, @Attribute('fit') fit: any) {
	constructor(myElement: ElementRef, fit: any) {
		if (fit === null) {
			this.fit = false;
		} else {
			this.fit = true;
		}
		//console.log(this.fit);
		this.rootElement = myElement.nativeElement;
	}
}
