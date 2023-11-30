let scrollbarWidth = false;

export default function getScrollbarWidth(cacheEnabled = true) {
    if (cacheEnabled && scrollbarWidth !== false) return scrollbarWidth;
    /* istanbul ignore else */
    if (typeof document !== 'undefined') {
        const div = document.createElement('div');
        div.style = {
            width: '100px',
            height: '100px',
            position: 'absolute',
            top: '-9999px',
            overflow: 'scroll',
        };

        document.body.appendChild(div);
        scrollbarWidth = (div.offsetWidth - div.clientWidth);
        document.body.removeChild(div);
    } else {
        scrollbarWidth = 0;
    }
    return scrollbarWidth || 0;
}
