import {ExtJSClass} from '../extjs-angular2/extjs.class';

export class SalesStore extends ExtJSClass {
	constructor (createConfig: any) {
		let className: any = 'SalesStore';
		let extend: any = 'Ext.data.ArrayStore';
		let defineConfig: any = {
			autoLoad:   true,
			proxy: {
				type: 'ajax',
				url: 'data/sales.json',
				reader: {
					type: 'json',
					rootProperty: 'rows'
				}
			},
			filters: [
					function(item) {
							return item.get('year') >= 2012;
					}
			],
			fields: [
					{name: 'orderid',       type: 'int'},
					{name: 'salesperson',   type: 'string'},
					{name: 'country',       type: 'string'},
					{name: 'orderdate',     type: 'date', dateFormat: 'd/m/Y'},
					{name: 'amount',        type: 'int'},
					{
							name: 'person-range',
							convert: function(v, record){
									if(/^[a-j]/i.test(record.get('salesperson'))) return 'A-J';
									if(/^[k-s]/i.test(record.get('salesperson'))) return 'K-S';
									if(/^[t-z]/i.test(record.get('salesperson'))) return 'T-Z';
									return v;
							}
					},{
							name: 'year',
							convert: function(v, record){
									return Ext.Date.format(record.get('orderdate'), "Y");
							}
					}
			]
		};
		super(className, extend, defineConfig, createConfig);
		return;
	}
}