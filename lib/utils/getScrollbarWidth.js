'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getScrollbarWidth;
var scrollbarWidth = false;

function getScrollbarWidth() {
    var cacheEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (cacheEnabled && scrollbarWidth !== false) return scrollbarWidth;
    /* istanbul ignore else */
    if (typeof document !== 'undefined') {
        var div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.position = 'absolute';
        div.style.top = '-9999px';
        div.style.overflow = 'scroll';

        document.body.appendChild(div);
        scrollbarWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
    } else {
        scrollbarWidth = 0;
    }
    return scrollbarWidth || 0;
}