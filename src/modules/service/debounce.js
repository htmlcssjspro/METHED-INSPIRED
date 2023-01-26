/**
 * Декоратор отложенного вызова
 *
 * @param {function} callee Функция, которую надо «отложить»
 * @param {number} timeoutMs Интервал, ms
 * @returns {function}
 */
export default function debounce(callee, timeoutMs = 1000) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callee(...args);
        }, timeoutMs);
    };
}
