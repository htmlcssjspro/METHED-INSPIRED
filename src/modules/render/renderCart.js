import { API_HOST, API_URL } from '../const';
import { addProductToCart, cartGoodsStore, cartTotalPrice, clearCart, getCartList, removeProductFromCart } from '../controllers/cartController';
import { sendOrder } from '../controllers/orderController';
import createCount from '../createCount';
import { router } from '../router';
import createElement from '../service/createElement';

const $cart = document.querySelector('.cart');
const $order = document.querySelector('.order');

const $cartContainer = createElement('div', {
    className: 'container cart__container',
    innerHTML: '<h2 class="cart__title">Корзина</h2>'
});

const $cartList = createElement('ul', {
    className: 'cart__list'
}, { parent: $cartContainer });

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
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    data.order = getCartList();
    if (data.order.length) {
        sendOrder(data)
            .then(responseData => {
                showOrderInfo(responseData);
            });
    }
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

const showOrderInfo = (data) => {
    const $modal = createElement('section', {
        className: 'modal',
    }, {
        parent: document.body,
        cb($modal) {
            $modal.addEventListener('click', event => {
                if (event.target === event.currentTarget) {
                    event.currentTarget.remove();
                    router.navigate('/');
                }
            });
        }
    });

    const $modalBody = createElement('div', {
        className: 'modal__body',
    }, { parent: $modal });

    $modalBody.insertAdjacentHTML('beforeend', `
        <h2 class="modal__title">Заказ оформлен №${data.id}</h2>
        <p class="modal__description modal__description_thank">Спасибо за выбор нашего магазина!</p>
        <p class="modal__description">Здесь вы можете посмотреть все детали вашего заказа.</p>

        <ul class="modal__customer-data customer">
            <li class="customer__item">
                <span class="customer__item-title">Получатель</span>
                <span class="customer__item-data">${data.fio}</span>
            </li>

            ${data.address && `
                <li class="customer__item">
                    <span class="customer__item-title">Адрес доставки</span>
                    <span class="customer__item-data">${data.address}</span>
                </li>
            `}

            <li class="customer__item">
                <span class="customer__item-title">Телефон</span>
                <span class="customer__item-data">${data.phone}</span>
            </li>

            ${data.email && `
                <li class="customer__item">
                    <span class="customer__item-title">E-mail</span>
                    <span class="customer__item-data">${data.email}</span>
                </li>
            `}

            <li class="customer__item">
                <span class="customer__item-title">Способ получения</span>
                <span class="customer__item-data">${{ self: 'Самовывоз', delivery: 'Доставка' }[data.delivery]}</span>
            </li>
        </ul>
    `);

    const $goodsList = createElement('ul', {
        className: 'modal__goods goods-list',
    }, {
        parent: $modalBody,
        append: data.order.map(item => {
            const product = cartGoodsStore.getProduct(item.id);
            return createElement('div', {
                className: 'goods-list__item',
            }, {
                append: [
                    createElement('img', {
                        className: 'goods-list__img',
                        src:       `${API_HOST}/${product.pic}`,
                        alt:       product.title
                    }),
                    createElement('p', {
                        className:   'goods-list__count',
                        textContent: `X${item.count}`,
                    }),
                ]
            });
        })
    });

    const $total = createElement('div', {
        className: 'modal__total',
    }, {
        parent: $modalBody,
        append: [
            createElement('img', {
                className:   'modal__total-title',
                textContent: 'Итого:',
            }),
            createElement('p', {
                className: 'modal__total-price',
                innerHTML: `руб&nbsp;${cartTotalPrice.total}`,
            }),
        ]
    });
    const $close = createElement('button', {
        className: 'modal__close',
        innerHTML: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8L16 16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 8L8 16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        `
    }, { parent: $modalBody,
        cb($close) {
            $close.addEventListener('click', event => {
                $modal.remove();
                router.navigate('/');
            });
        }
    });

    clearCart();
};

export default async function renderCart({ show = true }) {
    console.log(`renderCart(show:${show})`);

    $cartContainer.remove();
    $orderContainer.remove();
    if (!show) return;

    $cartList.textContent = '';
    getCartList().forEach(product => {
        // const data = await getOneGoodById(product.id);
        const data = cartGoodsStore.getProduct(product.id);

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

    cartTotalPrice.calc($cartTotalPrice);

    $cart.append($cartContainer);
    $order.append($orderContainer);
}
