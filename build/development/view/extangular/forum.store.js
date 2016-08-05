System.register(['../../extjs-angular2/extjs.class', './forum.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var extjs_class_1, forum_model_1;
    var ForumStore;
    return {
        setters:[
            function (extjs_class_1_1) {
                extjs_class_1 = extjs_class_1_1;
            },
            function (forum_model_1_1) {
                forum_model_1 = forum_model_1_1;
            }],
        execute: function() {
            ForumStore = (function (_super) {
                __extends(ForumStore, _super);
                function ForumStore(createConfig) {
                    var className = 'Grids.store.ForumThreadsStore';
                    var extend = 'Ext.data.BufferedStore';
                    var model = new forum_model_1.ForumModel({});
                    var defineConfig = {
                        model: model.extjsObject,
                        pageSize: 75,
                        leadingBufferZone: 300,
                        remoteFilter: true,
                        autoLoad: true,
                        proxy: {
                            type: 'jsonp',
                            noCache: false,
                            url: 'http://www.sencha.com/forum/remote_topics/index.php',
                            reader: {
                                rootProperty: 'topics',
                                totalProperty: 'totalCount'
                            },
                            simpleSortMode: true,
                            filterParam: 'query'
                        }
                    };
                    _super.call(this, className, extend, defineConfig, createConfig);
                    return;
                }
                return ForumStore;
            }(extjs_class_1.ExtJSClass));
            exports_1("ForumStore", ForumStore);
        }
    }
});
//# sourceMappingURL=forum.store.js.map