import { API_HOST } from '../const';
import { getOneGoodById } from '../controllers/apiController';
import { addProductToCart, getCartList, removeProductFromCart } from '../controllers/cartController';
import createCount from '../createCount';
import createElement from '../service/createElement';

const $cart = document.querySelector('.cart');
const $order = document.querySelector('.order');

const $cartContainer = createElement('div', {
    className: 'container cart__container',
    innerHTML: '<h2 class="cart__title">Корзина</h2>'
});

const $cartList = createElement('ul', {
    className: 'cart__list'
}, {
    parent: $cartContainer
});

const $cartTotal = createElement('div', {
    className: 'cart__total',
    innerHTML: '<p class="cart__total-title">Итого:</p>'
}, { parent: $cartContainer });
const $cartTotalPrice = createElement('p', {
    className: 'cart__total-price',
    innerHTML: 'руб&nbsp;0'
}, { parent: $cartTotal });

const $orderContainer = createElement('div', {
    className: 'container order__container',
    innerHTML: '<h2 class="order__title">Оформление заказа</h2>'
});

const submitHandler = event => {
    event.preventDefault();
    console.log('event.currentTarget: ', event.currentTarget);
};

const $orderForm = createElement('form', {
    className: 'order__form'
}, {
    parent: $orderContainer,
    cb($form) {
        $form.addEventListener('submit', submitHandler, false);
    }
});
const $orderPersonal = createElement('fieldset', {
    className: 'order__personal',
    innerHTML: `
        <label class="order__label">
            <input class="order__input" type="text" name="fio" placeholder="ФИО" required>
        </label>
        <label class="order__label">
            <input class="order__input" type="text" name="address" placeholder="Адрес доставки">
        </label>
        <label class="order__label">
            <input class="order__input" type="tel" name="phone" placeholder="Телефон" required>
        </label>
        <label class="order__label">
            <input class="order__input" type="email" name="email" placeholder="E-mail">
        </label>
    `
}, {
    parent: $orderForm
});
const $orderRadioList = createElement('fieldset', {
    className: 'order__radio-list',
    innerHTML: `
        <label class="order__radio radio">
            <input class="radio__input" type="radio" name="delivery" value="delivery" required>
            <span class="radio__text">Доставка</span>
        </label>

        <label class="order__radio radio">
            <input class="radio__input" type="radio" name="delivery" value="self" required>
            <span class="radio__text">Самовывоз</span>
        </label>
    `
}, {
    parent: $orderForm
});
const $orderButton = createElement('button', {
    className:   'button order__button order__submit main-button',
    type:        'submit',
    textContent: 'Оформить'
}, {
    parent: $orderForm
});

const calculateTotalPrice = () => {
    return '9598';
};

export default async function renderCart({ show = true }) {
    console.log(`renderCart(show:${show})`);

    $cartContainer.remove();
    $orderContainer.remove();
    if (!show) return;

    $cartList.textContent = '';
    getCartList().forEach(async product => {
        const data = await getOneGoodById(product.id);

        const $cartItem = createElement('li', {
            className: 'cart__item'
        }, { parent: $cartList });

        const $cartArticle = createElement('article', {
            className: 'item',
        }, { parent: $cartItem });

        $cartArticle.insertAdjacentHTML('beforeend', `
            <img src="${API_HOST}/${data.pic}" alt="${data.title}" class="item__image">

            <div class="item__content">
                <h3 class="item__title">${data.title}</h3>

                <p class="item__price">руб&nbsp;${data.price}</p>

                <div class="item__vendor-code">
                    <span class="item__subtitle">Артикул</span>
                    <span class="item__id">${product.id}</span>
                </div>
            </div>

            <div class="item__prop">
                <div class="item__color">
                    <p class="item__subtitle item__color-title">Цвет</p>
                    <div class="item__color-item color color_${product.color}"></div>
                </div>
                <div class="item__size">
                    <p class="item__subtitle item__size-title">Размер</p>
                    <div class="item__size-item size">${product.size}</div>
                </div>
            </div>
        `);

        const $cartCount = createElement('div', {
            className: 'item__count'
        }, {
            parent: $cartArticle,
            append: createCount(product.count, count => {
                product.count = count;
                addProductToCart(product);
            })
        });

        const $del = createElement('button', {
            className: 'item__del',
            ariaLabel: 'Удалить товар из корзины',
            title:     'Удалить товар из корзины',
        }, {
            parent: $cartArticle,
            cb($del) {
                $del.addEventListener('click', event => {
                    removeProductFromCart(product);
                    $cartItem.remove();
                });
            }
        });


    });


    $cartTotalPrice.innerHTML = `руб&nbsp;${calculateTotalPrice()}`;


    $cart.append($cartContainer);
    $order.append($orderContainer);
}
