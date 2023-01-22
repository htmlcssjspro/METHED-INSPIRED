import { API_HOST } from '../const';
import createElement from '../service/createElement';

const $cart = document.querySelector('.cart');
const $order = document.querySelector('.order');

const $cartContainer = createElement('div', {
    className: 'container cart__container',
    innerHTML: `
        <h2 class="cart__title">Корзина</h2>
    `
});

const $cartList = createElement('ul', {
    className: 'cart__list'
}, {
    parent: $cartContainer
});

const $cartItem = createElement('li', {
    className: 'cart__item'
}, {
    parent: $cartList
});
const $cartArticle = createElement('article', {
    className: 'item',
    innerHTML: `
        <img src="${API_HOST}/img/8688273634.jpg" alt="Пижама со штанами шелковая" class="item__image">

        <div class="item__content">
            <h3 class="item__title">Пижама со штанами шелковая</h3>

            <p class="item__price">руб 6999</p>

            <div class="item__vendor-code">
                <span class="item__subtitle">Артикул</span>
                <span class="item__id">089083</span>
            </div>
        </div>

        <div class="item__prop">
            <div class="item__color">
                <p class="item__subtitle item__color-title">Цвет</p>

                <div class="item__color-item color color_black color_check"></div>
            </div>

            <div class="item__size">
                <p class="item__subtitle item__size-title">Размер</p>

                <div class="item__size-item size">XS</div>
            </div>
        </div>

        <button class="item__del" aria-label="Удалить товар из корзины"></button>

        <div class="count item__count">
            <button class="count__item count__minus">-</button>
            <span class="count__item count__number">1</span>
            <button class="count__item count__plus">+</button>
            <input type="hidden" name="count" value="1">
        </div>
    `
}, {
    parent: $cartItem
});

const $cartTotal = createElement('div', {
    className: 'cart__total',
    innerHTML: `
        <p class="cart__total-title">Итого:</p>
        <p class="cart__total-price">руб 9598</p>
    `
}, {
    parent: $cartContainer
});


const $orderContainer = createElement('div', {
    className: 'container order__container',
    innerHTML: `
        <h2 class="order__title">Оформление заказа</h2>
    `
});

const $orderForm = createElement('form', {
    className: 'cart__list'
}, {
    parent: $orderContainer
});
const $orderPersonal = createElement('fieldset', {
    className: 'order__personal',
    innerHTML: `
        <label class="order__label">
            <input class="order__input" type="text" placeholder="ФИО" name="fio">
        </label>

        <label class="order__label">
            <input class="order__input" type="text" placeholder="Адрес доставки" name="address">
        </label>

        <label class="order__label">
            <input class="order__input" type="text" placeholder="Телефон" name="phone">
        </label>

        <label class="order__label">
            <input class="order__input" type="text" placeholder="E-mail" name="email">
        </label>
    `
}, {
    parent: $orderForm
});
const $orderRadioList = createElement('fieldset', {
    className: 'order__radio-list',
    innerHTML: `
        <label class="order__radio radio">
            <input class="radio__input" type="radio" name="delivery" value="delivery">
            <span class="radio__text">Доставка</span>
        </label>

        <label class="order__radio radio">
            <input class="radio__input" type="radio" name="delivery" value="self">
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


export default async function renderCart({ show = true }) {
    console.log(`renderCart(show:${show})`);

    if (!show) {
        $cartContainer.remove();
        $orderContainer.remove();
        return;
    }

    $cart.append($cartContainer);
    $order.append($orderContainer);
}
