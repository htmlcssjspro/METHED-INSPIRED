import createElement from './service/createElement';

const countController = ($input, $minus, $number, $plus, countCb = () => {}) => {
    let n = +$input.value;
    $minus.addEventListener('click', () => {
        if (n == 1) return;
        n--;
        $input.value = n;
        $number.textContent = n;
        countCb(n);
    });
    $plus.addEventListener('click', () => {
        n++;
        $input.value = n;
        $number.textContent = n;
        countCb(n);
    });
};

export default function createCount(count, countCb = () => {}) {
    const $count = createElement('div', {
        className: 'count'
    });

    const $input = createElement('input', {
        className: 'input-hide count__item count__input',
        type:      'hidden',
        name:      'count',
        value:     count,
    });
    const $minus = createElement('button', {
        className:   'count__item count__minus',
        type:        'button',
        textContent: '-',
    });
    const $number = createElement('span', {
        className:   'count__item count__number',
        textContent: count,
    });
    const $plus = createElement('button', {
        className:   'count__item count__plus',
        type:        'button',
        textContent: '+',
    });

    $count.append($input, $minus, $number, $plus);
    countController($input, $minus, $number, $plus, countCb);

    return $count;
}
