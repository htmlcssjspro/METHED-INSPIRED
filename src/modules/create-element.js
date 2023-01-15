/**
 *
 * @param {string} tagName
 * @param {Object.<string, (string | boolean)>} attr - Attributes
 * @param {Object} [options={}]
 * @param {HTMLElement} options.parent
 * @param {(HTMLElement | HTMLElement[] | NodeList | HTMLCollection)} options.append
 * @param {Function} options.cb
 */
export default function createElement(tagName, attr, { parent, append, cb } = {}) {
    const element = document.createElement(tagName);

    if (attr) {
        Object.assign(element, attr);
    }

    if (parent && parent instanceof HTMLElement) {
        parent.append(element);
    }

    if (append) {
        if (append instanceof HTMLElement) {
            element.append(append);
        } else if (Array.from(append)?.every(item => item instanceof HTMLElement)) {
            element.append(...append);
        }
    }

    if (cb && typeof cb === 'function') {
        cb(element);
    }

    return element;
}
