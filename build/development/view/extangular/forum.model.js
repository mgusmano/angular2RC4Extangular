System.register(['../../extjs-angular2/extjs.class'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var extjs_class_1;
    var ForumModel;
    return {
        setters:[
            function (extjs_class_1_1) {
                extjs_class_1 = extjs_class_1_1;
            }],
        execute: function() {
            ForumModel = (function (_super) {
                __extends(ForumModel, _super);
                function ForumModel(CreateConfig) {
                    var className = 'Grids.model.ForumThreadModel';
                    var extend = 'Ext.data.Model';
                    var defineConfig = {
                        fields: [
                            { name: 'title', mapping: 'topic_title' },
                            { name: 'forumtitle', mapping: 'forum_title' },
                            { name: 'forumid', type: 'int' },
                            { name: 'username', mapping: 'author' },
                            { name: 'replycount', mapping: 'reply_count', type: 'int' },
                            { name: 'lastpost', mapping: 'post_time', type: 'date', dateFormat: 'timestamp' },
                            'lastposter',
                            'excerpt',
                            'topic_id'
                        ],
                        idProperty: 'post_id'
                    };
                    _super.call(this, className, extend, defineConfig, CreateConfig);
                    return;
                }
                return ForumModel;
            }(extjs_class_1.ExtJSClass));
            exports_1("ForumModel", ForumModel);
        }
    }
});
//# sourceMappingURL=forum.model.js.map