import { API_HOST, DATA } from '../const';
import sprite from '../../img/sprite.svg';
import { getOneGoodById } from '../controllers/apiController';
import { addProductToCart } from '../controllers/cartController';
import { getFavorite } from '../controllers/favoriteController';
import { router } from '../router';
import createElement from '../service/createElement';

const $card = document.querySelector('.card');

const $container = createElement('div', {
    className: 'container card__container',
});

const countController = ($input, $minus, $number, $plus) => {
    let n = +$input.value;
    $minus.addEventListener('click', () => {
        if (n == 1) return;
        n--;
        $input.value = n;
        $number.textContent = n;
    });
    $plus.addEventListener('click', () => {
        n++;
        $input.value = n;
        $number.textContent = n;
    });
};
const createCount = () => {
    const $count = createElement('div', {
        className: 'card__count count',
    });

    const $input = createElement('input', {
        className: 'input-hide count__item count__input',
        type:      'hidden',
        name:      'count',
        value:     1,
    });
    const $minus = createElement('button', {
        className:   'count__item count__minus',
        type:        'button',
        textContent: '-',
    });
    const $number = createElement('span', {
        className:   'count__item count__number',
        textContent: 1,
    });
    const $plus = createElement('button', {
        className:   'count__item count__plus',
        type:        'button',
        textContent: '+',
    });

    $count.append($input, $minus, $number, $plus);
    countController($input, $minus, $number, $plus);

    return $count;
};

const inputValidate = event => {
    const $input = event.target;
    const validityState = $input.validity;

    if (validityState.valueMissing) {
        if ($input.name === 'color') {
            $input.setCustomValidity('Укажите Цвет');
        } else if ($input.name === 'size') {
            $input.setCustomValidity('Укажите Размер');
        }
    } else if (validityState.valid) {
        $input.setCustomValidity('');
    } else {
        $input.setCustomValidity('');
    }

    let $error;
    let $list;
    if ($input.name === 'color') {
        $list = $input.closest('.card__color-list');
    }
    if ($input.name === 'size') {
        $list = $input.closest('.card__size-list');
    }
    const $next = $list.nextElementSibling;
    if ($next && $next.tagName === 'OUTPUT' && $next.classList.contains('input-error')) {
        $error = $next;
    } else {
        $error = document.createElement('output');
        $error.className = 'input-error';
        $error.style.display = 'block';
        $error.style.color = 'maroon';
        $list.after($error);
    }
    $error.textContent = $input.validationMessage;
};

const submitHandler = event => {
    event.preventDefault();
    const $form = event.currentTarget;
    if ($form.checkValidity()) {
        const formData = new FormData($form);
        const product = Object.fromEntries(formData);
        addProductToCart(product);
    }
};

export default async function renderCard({ id, show = true }) {
    console.log(`renderCard({ id:${id}, show:${show} })`); // TODO Delete

    $container.textContent = '';
    $container.remove();
    if (!show) return;

    let response = await getOneGoodById(id);
    console.log(`renderCard({ id:${id} })::response: `, response); // TODO Delete

    const { _id, gender, category, title, description, pic, price, materials, colors, size, top } = response;

    const $img = createElement('img', {
        className: 'card__image',
        src:       `${API_HOST}/${pic}`,
        alt:       title,
    }, { parent: $container });

    const $content = createElement('form', {
        className: 'card__content',
        id:        'order',
    }, {
        parent: $container,
        cb($form){
            $form.addEventListener('change', inputValidate, false);
            $form.addEventListener('submit', submitHandler, false);
        }
    });

    const $title = createElement('h2', {
        className:   'card__title',
        textContent: title,
    }, { parent: $content });

    const $price = createElement('p', {
        className: 'card__price',
        innerHTML: `руб&nbsp;${price}`,
    }, { parent: $content });

    const $vendorCode = createElement('div', {
        className: 'card__vendor-code',
        innerHTML: `
            <input class="input-hide" type="hidden" name="id" value="${id}"></input>
            <span class="card__subtitle">Артикул</span>
            &nbsp;
            <span class="card__id">${id}</span>
        `
    }, { parent: $content });

    const $colorList = createElement('div', {
        className: 'card__color-list',
    }, {
        parent: createElement('div', {
            className: 'card__color',
            innerHTML: '<p class="card__subtitle card__color-title">Цвет</p>'
        }, { parent: $content }),
        append: colors.map((colorId, i, colors) => {
            const { title } = DATA.colors.find(color => color.id === colorId);
            return createElement('div', {
                className: 'card__color-item',
            }, {
                append: [
                    createElement('input', {
                        className: 'input-hide',
                        id:        `color-${title}`,
                        type:      'radio',
                        name:      'color',
                        value:     title,
                        // checked:   !i,
                        checked:   i == 0 && colors.length === 1,
                        required:  true,
                    }, {
                        cb($input) {
                            $input.addEventListener('invalid', inputValidate, false);
                        }
                    }),
                    createElement('label', {
                        className: `color color_card color_${title}`,
                        title,
                    }, {
                        cb(label){
                            label.setAttribute('for', `color-${title}`);
                        }
                    })
                ],
            });
        })
    });

    const $sizeList = createElement('div', {
        className: 'card__size-list',
    }, {
        parent: createElement('div', {
            className: 'card__size',
            innerHTML: '<p class="card__subtitle card__size-title">Размер</p>'
        }, { parent: $content }),
        append: size.map((item, i, size) => {
            return createElement('div', {
                className: 'card__size-item',
            }, {
                append: [
                    createElement('input', {
                        className: 'input-hide size__input',
                        id:        `size-${item}`,
                        type:      'radio',
                        name:      'size',
                        value:     item,
                        // checked:   !i,
                        checked:   i == 0 && size.length === 1,
                        required:  true,
                    }, {
                        cb($input) {
                            $input.addEventListener('invalid', inputValidate, false);
                        }
                    }),
                    createElement('label', {
                        className:   'card__size-item size',
                        textContent: item,
                    }, {
                        cb(label){
                            label.setAttribute('for', `size-${item}`);
                        }
                    }),
                ],
            });
        })
    });

    const $description = createElement('p', {
        className:   'card__description-text',
        textContent: description
    }, {
        parent: createElement('div', {
            className: 'card__description',
            innerHTML: '<p class="card__subtitle card__description-title">Описание</p>'
        }, { parent: $content })
    });

    const $control = createElement('div', {
        className: 'card__control',
    }, {
        parent: $content,
        append: [
            createCount(),
            createElement('button', {
                className:   'button card__add-cart card__button',
                type:        'submit',
                textContent: 'В корзину'
            }),
            createElement('button', {
                className: `button card__favorite favorite ${getFavorite().includes(id) ? 'favorite_active' : ''}`,
                type:      'button',
                title:     'Добавить в избранное',
                ariaLabel: 'Добавить в избранное',
                innerHTML: `
                    <svg class="icon icon-favorite" width="24" height="24">
                        <use href="${sprite}#favorite"></use>
                    </svg>
                `
            }, {
                cb(button){
                    button.dataset.id = id;
                }
            })
        ]
    });

    $card.append($container);
    router.updatePageLinks();

    return { gender, category };
}
