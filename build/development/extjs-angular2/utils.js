System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FUNCTION_STRIP_COMMENTS, FUNCTION_ARGUMENT_NAMES, Utils;
    return {
        setters:[],
        execute: function() {
            //import {GridOptionsWrapper} from "./gridOptionsWrapper";
            //import {Column} from "./entities/column";
            //import {RowNode} from "./entities/rowNode";
            FUNCTION_STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
            FUNCTION_ARGUMENT_NAMES = /([^\s,]+)/g;
            Utils = (function () {
                function Utils() {
                }
                Utils.iterateObject = function (object, callback) {
                    var keys = Object.keys(object);
                    for (var i = 0; i < keys.length; i++) {
                        var key = keys[i];
                        var value = object[key];
                        callback(key, value);
                    }
                };
                Utils.iteratePivotGridObject = function (object, callback) {
                    var keys = Object.keys(object);
                    for (var i = 0; i < keys.length; i++) {
                        var key = keys[i];
                        var value = object[key];
                        callback(key, value);
                    }
                };
                Utils.cloneObject = function (object) {
                    var copy = {};
                    var keys = Object.keys(object);
                    for (var i = 0; i < keys.length; i++) {
                        var key = keys[i];
                        var value = object[key];
                        copy[key] = value;
                    }
                    return copy;
                };
                Utils.map = function (array, callback) {
                    var result = [];
                    for (var i = 0; i < array.length; i++) {
                        var item = array[i];
                        var mappedItem = callback(item);
                        result.push(mappedItem);
                    }
                    return result;
                };
                Utils.mapObject = function (object, callback) {
                    var result = [];
                    Utils.iterateObject(object, function (key, value) {
                        result.push(callback(value));
                    });
                    return result;
                };
                Utils.forEach = function (array, callback) {
                    if (!array) {
                        return;
                    }
                    for (var i = 0; i < array.length; i++) {
                        var value = array[i];
                        callback(value, i);
                    }
                };
                Utils.filter = function (array, callback) {
                    var result = [];
                    array.forEach(function (item) {
                        if (callback(item)) {
                            result.push(item);
                        }
                    });
                    return result;
                };
                Utils.assign = function (object, source) {
                    Utils.iterateObject(source, function (key, value) {
                        object[key] = value;
                    });
                };
                Utils.getFunctionParameters = function (func) {
                    var fnStr = func.toString().replace(FUNCTION_STRIP_COMMENTS, '');
                    var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(FUNCTION_ARGUMENT_NAMES);
                    if (result === null) {
                        return [];
                    }
                    else {
                        return result;
                    }
                };
                Utils.find = function (collection, predicate, value) {
                    if (collection === null || collection === undefined) {
                        return null;
                    }
                    var firstMatchingItem;
                    for (var i = 0; i < collection.length; i++) {
                        var item = collection[i];
                        if (typeof predicate === 'string') {
                            if (item[predicate] === value) {
                                firstMatchingItem = item;
                                break;
                            }
                        }
                        else {
                            var callback = predicate;
                            if (callback(item)) {
                                firstMatchingItem = item;
                                break;
                            }
                        }
                    }
                    return firstMatchingItem;
                };
                Utils.toStrings = function (array) {
                    return this.map(array, function (item) {
                        if (item === undefined || item === null || !item.toString) {
                            return null;
                        }
                        else {
                            return item.toString();
                        }
                    });
                };
                Utils.iterateArray = function (array, callback) {
                    for (var index = 0; index < array.length; index++) {
                        var value = array[index];
                        callback(value, index);
                    }
                };
                //Returns true if it is a DOM node
                //taken from: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
                Utils.isNode = function (o) {
                    return (typeof Node === 'function' ? o instanceof Node :
                        o && typeof o === 'object' && typeof o.nodeType === 'number' && typeof o.nodeName === 'string');
                };
                //Returns true if it is a DOM element
                //taken from: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
                Utils.isElement = function (o) {
                    return (typeof HTMLElement === 'function' ? o instanceof HTMLElement :
                        o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string');
                };
                Utils.isNodeOrElement = function (o) {
                    return this.isNode(o) || this.isElement(o);
                };
                //adds all type of change listeners to an element, intended to be a text field
                Utils.addChangeListener = function (element, listener) {
                    element.addEventListener('changed', listener);
                    element.addEventListener('paste', listener);
                    element.addEventListener('input', listener);
                    // IE doesn't fire changed for special keys (eg delete, backspace), so need to
                    // listen for this further ones
                    element.addEventListener('keydown', listener);
                    element.addEventListener('keyup', listener);
                };
                //if value is undefined, null or blank, returns null, otherwise returns the value
                Utils.makeNull = function (value) {
                    if (value === null || value === undefined || value === '') {
                        return null;
                    }
                    else {
                        return value;
                    }
                };
                Utils.missing = function (value) {
                    return !this.exists(value);
                };
                Utils.missingOrEmpty = function (value) {
                    return this.missing(value) || value.length === 0;
                };
                Utils.exists = function (value) {
                    if (value === null || value === undefined || value === '') {
                        return false;
                    }
                    else {
                        return true;
                    }
                };
                Utils.existsAndNotEmpty = function (value) {
                    return this.exists(value) && value.length > 0;
                };
                Utils.removeAllChildren = function (node) {
                    if (node) {
                        while (node.hasChildNodes()) {
                            node.removeChild(node.lastChild);
                        }
                    }
                };
                Utils.removeElement = function (parent, cssSelector) {
                    this.removeFromParent(parent.querySelector(cssSelector));
                };
                Utils.removeFromParent = function (node) {
                    if (node && node.parentNode) {
                        node.parentNode.removeChild(node);
                    }
                };
                Utils.isVisible = function (element) {
                    return (element.offsetParent !== null);
                };
                /**
                 * loads the template and returns it as an element. makes up for no simple way in
                 * the dom api to load html directly, eg we cannot do this: document.createElement(template)
                 */
                Utils.loadTemplate = function (template) {
                    var tempDiv = document.createElement('div');
                    tempDiv.innerHTML = template;
                    return tempDiv.firstChild;
                };
                Utils.addOrRemoveCssClass = function (element, className, addOrRemove) {
                    if (addOrRemove) {
                        this.addCssClass(element, className);
                    }
                    else {
                        this.removeCssClass(element, className);
                    }
                };
                Utils.callIfPresent = function (func) {
                    if (func) {
                        func();
                    }
                };
                Utils.addCssClass = function (element, className) {
                    var _this = this;
                    if (!className || className.length === 0) {
                        return;
                    }
                    if (className.indexOf(' ') >= 0) {
                        className.split(' ').forEach(function (value) { return _this.addCssClass(element, value); });
                        return;
                    }
                    if (element.classList) {
                        element.classList.add(className);
                    }
                    else {
                        if (element.className && element.className.length > 0) {
                            var cssClasses = element.className.split(' ');
                            if (cssClasses.indexOf(className) < 0) {
                                cssClasses.push(className);
                                element.className = cssClasses.join(' ');
                            }
                        }
                        else {
                            element.className = className;
                        }
                    }
                };
                Utils.offsetHeight = function (element) {
                    return element && element.clientHeight ? element.clientHeight : 0;
                };
                Utils.offsetWidth = function (element) {
                    return element && element.clientWidth ? element.clientWidth : 0;
                };
                Utils.removeCssClass = function (element, className) {
                    if (element.className && element.className.length > 0) {
                        var cssClasses = element.className.split(' ');
                        var index = cssClasses.indexOf(className);
                        if (index >= 0) {
                            cssClasses.splice(index, 1);
                            element.className = cssClasses.join(' ');
                        }
                    }
                };
                Utils.removeFromArray = function (array, object) {
                    if (array.indexOf(object) >= 0) {
                        array.splice(array.indexOf(object), 1);
                    }
                };
                Utils.defaultComparator = function (valueA, valueB) {
                    var valueAMissing = valueA === null || valueA === undefined;
                    var valueBMissing = valueB === null || valueB === undefined;
                    if (valueAMissing && valueBMissing) {
                        return 0;
                    }
                    if (valueAMissing) {
                        return -1;
                    }
                    if (valueBMissing) {
                        return 1;
                    }
                    if (valueA < valueB) {
                        return -1;
                    }
                    else if (valueA > valueB) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                };
                Utils.formatWidth = function (width) {
                    if (typeof width === 'number') {
                        return width + 'px';
                    }
                    else {
                        return width;
                    }
                };
                Utils.formatNumberTwoDecimalPlacesAndCommas = function (value) {
                    // took this from: http://blog.tompawlak.org/number-currency-formatting-javascript
                    if (typeof value === 'number') {
                        return (Math.round(value * 100) / 100).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    }
                    else {
                        return '';
                    }
                };
                /**
                 * Tries to use the provided renderer.
                 */
                Utils.useRenderer = function (eParent, eRenderer, params) {
                    var resultFromRenderer = eRenderer(params);
                    //TypeScript type inference magic
                    if (typeof resultFromRenderer === 'string') {
                        var eTextSpan = document.createElement('span');
                        eTextSpan.innerHTML = resultFromRenderer;
                        eParent.appendChild(eTextSpan);
                    }
                    else if (this.isNodeOrElement(resultFromRenderer)) {
                        //a dom node or element was returned, so add child
                        eParent.appendChild(resultFromRenderer);
                    }
                    else {
                        if (this.exists(resultFromRenderer)) {
                            console.warn('ag-Grid: result from render should be either a string or a DOM object, got ' + typeof resultFromRenderer);
                        }
                    }
                };
                // /**
                //  * If icon provided, use this (either a string, or a function callback).
                //  * if not, then use the second parameter, which is the svgFactory function
                //  */
                // static createIcon(iconName: string, gridOptionsWrapper: GridOptionsWrapper, column: Column, svgFactoryFunc: () => Node) {
                //     let eResult = document.createElement('span');
                //     eResult.appendChild(this.createIconNoSpan(iconName, gridOptionsWrapper, column, svgFactoryFunc));
                //     return eResult;
                // }
                // static createIconNoSpan(iconName: string, gridOptionsWrapper: GridOptionsWrapper, colDefWrapper: Column, svgFactoryFunc: () => Node) {
                //     let userProvidedIcon: Function | string;
                //     // check col for icon first
                //     if (colDefWrapper && colDefWrapper.getColDef().icons) {
                //         userProvidedIcon = colDefWrapper.getColDef().icons[iconName];
                //     }
                //     // it not in col, try grid options
                //     if (!userProvidedIcon && gridOptionsWrapper.getIcons()) {
                //         userProvidedIcon = gridOptionsWrapper.getIcons()[iconName];
                //     }
                //     // now if user provided, use it
                //     if (userProvidedIcon) {
                //         let rendererResult: any;
                //         if (typeof userProvidedIcon === 'function') {
                //             rendererResult = userProvidedIcon();
                //         } else if (typeof userProvidedIcon === 'string') {
                //             rendererResult = userProvidedIcon;
                //         } else {
                //             throw 'icon from grid options needs to be a string or a function';
                //         }
                //         if (typeof rendererResult === 'string') {
                //             return this.loadTemplate(rendererResult);
                //         } else if (this.isNodeOrElement(rendererResult)) {
                //             return rendererResult;
                //         } else {
                //             throw 'iconRenderer should return back a string or a dom object';
                //         }
                //     } else {
                //         // otherwise we use the built in icon
                //         return svgFactoryFunc();
                //     }
                // }
                Utils.addStylesToElement = function (eElement, styles) {
                    if (!styles) {
                        return;
                    }
                    Object.keys(styles).forEach(function (key) {
                        eElement.style[key] = styles[key];
                    });
                };
                Utils.getScrollbarWidth = function () {
                    var outer = document.createElement('div');
                    outer.style.visibility = 'hidden';
                    outer.style.width = '100px';
                    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
                    document.body.appendChild(outer);
                    var widthNoScroll = outer.offsetWidth;
                    // force scrollbars
                    outer.style.overflow = 'scroll';
                    // add innerdiv
                    var inner = document.createElement('div');
                    inner.style.width = '100%';
                    outer.appendChild(inner);
                    var widthWithScroll = inner.offsetWidth;
                    // remove divs
                    outer.parentNode.removeChild(outer);
                    return widthNoScroll - widthWithScroll;
                };
                Utils.isKeyPressed = function (event, keyToCheck) {
                    var pressedKey = event.which || event.keyCode;
                    return pressedKey === keyToCheck;
                };
                Utils.setVisible = function (element, visible, visibleStyle) {
                    if (visible) {
                        if (this.exists(visibleStyle)) {
                            element.style.display = visibleStyle;
                        }
                        else {
                            element.style.display = 'inline';
                        }
                    }
                    else {
                        element.style.display = 'none';
                    }
                };
                Utils.isBrowserIE = function () {
                    if (this.isIE === undefined) {
                        this.isIE = false || !!document.documentMode; // At least IE6
                    }
                    return this.isIE;
                };
                Utils.isBrowserSafari = function () {
                    if (this.isSafari === undefined) {
                        this.isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
                    }
                    return this.isSafari;
                };
                // taken from: http://stackoverflow.com/questions/1038727/how-to-get-browser-width-using-javascript-code
                Utils.getBodyWidth = function () {
                    if (document.body) {
                        return document.body.clientWidth;
                    }
                    if (window.innerHeight) {
                        return window.innerWidth;
                    }
                    if (document.documentElement && document.documentElement.clientWidth) {
                        return document.documentElement.clientWidth;
                    }
                    return -1;
                };
                // taken from: http://stackoverflow.com/questions/1038727/how-to-get-browser-width-using-javascript-code
                Utils.getBodyHeight = function () {
                    if (document.body) {
                        return document.body.clientHeight;
                    }
                    if (window.innerHeight) {
                        return window.innerHeight;
                    }
                    if (document.documentElement && document.documentElement.clientHeight) {
                        return document.documentElement.clientHeight;
                    }
                    return -1;
                };
                Utils.setCheckboxState = function (eCheckbox, state) {
                    if (typeof state === 'boolean') {
                        eCheckbox.checked = state;
                        eCheckbox.indeterminate = false;
                    }
                    else {
                        // isNodeSelected returns back undefined if it's a group and the children
                        // are a mix of selected and unselected
                        eCheckbox.indeterminate = true;
                    }
                };
                // public static traverseNodesWithKey(nodes: RowNode[], callback: (node: RowNode, key: string)=>void): void {
                //     let keyParts: any[] = [];
                //     recursiveSearchNodes(nodes);
                //     function recursiveSearchNodes(nodes: RowNode[]): void {
                //         nodes.forEach( (node: RowNode) => {
                //             if (node.group) {
                //                 keyParts.push(node.key);
                //                 let key = keyParts.join('|');
                //                 callback(node, key);
                //                 recursiveSearchNodes(node.children);
                //                 keyParts.pop();
                //             }
                //         });
                //     }
                // }
                // Taken from here: https://github.com/facebook/fixed-data-table/blob/master/src/vendor_upstream/dom/normalizeWheel.js
                /**
                 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
                 * complicated, thus this doc is long and (hopefully) detailed enough to answer
                 * your questions.
                 *
                 * If you need to react to the mouse wheel in a predictable way, this code is
                 * like your bestest friend. * hugs *
                 *
                 * As of today, there are 4 DOM event types you can listen to:
                 *
                 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
                 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
                 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
                 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
                 *
                 * So what to do?  The is the best:
                 *
                 *   normalizeWheel.getEventType();
                 *
                 * In your event callback, use this code to get sane interpretation of the
                 * deltas.  This code will return an object with properties:
                 *
                 *   spinX   -- normalized spin speed (use for zoom) - x plane
                 *   spinY   -- " - y plane
                 *   pixelX  -- normalized distance (to pixels) - x plane
                 *   pixelY  -- " - y plane
                 *
                 * Wheel values are provided by the browser assuming you are using the wheel to
                 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
                 * significantly on different platforms and browsers, forgetting that you can
                 * scroll at different speeds.  Some devices (like trackpads) emit more events
                 * at smaller increments with fine granularity, and some emit massive jumps with
                 * linear speed or acceleration.
                 *
                 * This code does its best to normalize the deltas for you:
                 *
                 *   - spin is trying to normalize how far the wheel was spun (or trackpad
                 *     dragged).  This is super useful for zoom support where you want to
                 *     throw away the chunky scroll steps on the PC and make those equal to
                 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
                 *     resolve a single slow step on a wheel to 1.
                 *
                 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
                 *     get the crazy differences between browsers, but at least it'll be in
                 *     pixels!
                 *
                 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
                 *     should translate to positive value zooming IN, negative zooming OUT.
                 *     This matches the newer 'wheel' event.
                 *
                 * Why are there spinX, spinY (or pixels)?
                 *
                 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
                 *     with a mouse.  It results in side-scrolling in the browser by default.
                 *
                 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
                 *
                 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
                 *     probably is by browsers in conjunction with fancy 3D controllers .. but
                 *     you know.
                 *
                 * Implementation info:
                 *
                 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
                 * average mouse:
                 *
                 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
                 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
                 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
                 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
                 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
                 *
                 * On the trackpad:
                 *
                 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
                 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
                 *
                 * On other/older browsers.. it's more complicated as there can be multiple and
                 * also missing delta values.
                 *
                 * The 'wheel' event is more standard:
                 *
                 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
                 *
                 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
                 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
                 * backward compatibility with older events.  Those other values help us
                 * better normalize spin speed.  Example of what the browsers provide:
                 *
                 *                          | event.wheelDelta | event.detail
                 *        ------------------+------------------+--------------
                 *          Safari v5/OS X  |       -120       |       0
                 *          Safari v5/Win7  |       -120       |       0
                 *         Chrome v17/OS X  |       -120       |       0
                 *         Chrome v17/Win7  |       -120       |       0
                 *                IE9/Win7  |       -120       |   undefined
                 *         Firefox v4/OS X  |     undefined    |       1
                 *         Firefox v4/Win7  |     undefined    |       3
                 *
                 */
                Utils.normalizeWheel = function (event) {
                    var PIXEL_STEP = 10;
                    var LINE_HEIGHT = 40;
                    var PAGE_HEIGHT = 800;
                    // spinX, spinY
                    var sX = 0;
                    var sY = 0;
                    // pixelX, pixelY
                    var pX = 0;
                    var pY = 0;
                    // Legacy
                    if ('detail' in event) {
                        sY = event.detail;
                    }
                    if ('wheelDelta' in event) {
                        sY = -event.wheelDelta / 120;
                    }
                    if ('wheelDeltaY' in event) {
                        sY = -event.wheelDeltaY / 120;
                    }
                    if ('wheelDeltaX' in event) {
                        sX = -event.wheelDeltaX / 120;
                    }
                    // side scrolling on FF with DOMMouseScroll
                    if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
                        sX = sY;
                        sY = 0;
                    }
                    pX = sX * PIXEL_STEP;
                    pY = sY * PIXEL_STEP;
                    if ('deltaY' in event) {
                        pY = event.deltaY;
                    }
                    if ('deltaX' in event) {
                        pX = event.deltaX;
                    }
                    if ((pX || pY) && event.deltaMode) {
                        if (event.deltaMode === 1) {
                            pX *= LINE_HEIGHT;
                            pY *= LINE_HEIGHT;
                        }
                        else {
                            pX *= PAGE_HEIGHT;
                            pY *= PAGE_HEIGHT;
                        }
                    }
                    // Fall-back if spin cannot be determined
                    if (pX && !sX) {
                        sX = (pX < 1) ? -1 : 1;
                    }
                    if (pY && !sY) {
                        sY = (pY < 1) ? -1 : 1;
                    }
                    return { spinX: sX,
                        spinY: sY,
                        pixelX: pX,
                        pixelY: pY };
                };
                return Utils;
            }());
            exports_1("Utils", Utils);
        }
    }
});
//# sourceMappingURL=utils.js.map