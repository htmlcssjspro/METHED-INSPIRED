import { API_HOST, API_URL, DATA } from '../const';
import createElement from '../service/create-element';
import getData from '../service/get-data';
import sprite from '../../img/sprite.svg';

const $products = document.querySelector('.products');

const $container = createElement('div', {
    className: 'container'
}, {
    parent: $products,
    append: createElement('h2', {
        className:   'products__title',
        textContent: 'Новинки'
    })
});

const $productsList = createElement('ul', {
    className: 'products__list'
}, {
    parent: $container
});


export default async function renderProducts(searchParams = {}) {
    console.log('renderGoods()');

    // searchParams.category ??= 'novelties';
    // const novelties = DATA.novelties;

    const goods = await getData(`${API_URL}/goods`, searchParams);
    console.log('goods: ', goods);

    $productsList.textContent = '';

    const cardList = goods.map(product => {
        const $productsItem = createElement('li', {
            classList: 'products__item'
        });

        const $card = createElement('article', {
            className: 'product',
            innerHTML: `
                <a class="product__link" href="/product/${product.id}" data-navigo>
                    <img class="product__img"
                         src="${API_HOST}/${product.pic}"
                         alt="${product.title}">
                    <h3 class="product__title">${product.title}</h3>
                </a>
            `
        }, { parent: $productsItem });

        const $footer = createElement('footer', {
            className: 'product__footer',
            innerHTML: `
                <div class="product__price-favorite">
                    <p class="product__price">руб ${product.price}</p>
                    <button
                        class="btn product__favorite product__favorite_active"
                        aria-label="Добавить в избранное"
                        data-id="${product.id}">
                        <svg class="icon icon-favorite" width="24" height="24">
                            <use href="${sprite}#favorite"></use>
                        </svg>
                    </button>
                </div>
            `
        }, { parent: $card });

        const colorList = createElement('ul', {
            className: 'product__color-list',
        }, {
            parent: $footer,
            append: product.colors.map((colorId, i) => {
                const color = DATA.colors.find(item => item.id == colorId);
                return createElement('li', {
                    className: 'product__color-item'
                }, {
                    append: createElement('div', {
                        className: `color color_${color.title} ${i ? '' : 'color_checked'}`,
                        style:     `background-color: ${color.code}`,
                        title:     color.title
                    })
                });

                // const colorItem = '';
                // return colorItem;
            })
        });


        return $productsItem;
    });

    $productsList.append(...cardList);
}


// TODO Delete
const productsinnerHTML = `
        <div class="container">
            <h2 class="products__title">Новинки</h2>

            <ul class="products__list">
                <li class="products__item">
                    <article class="product">
                        <a class="product__link"
                            href="#">
                            <img class="product__img"
                                    src="img/product-01.jpg"
                                    alt="Бюстгальтер-Балконет Wien из Микрофибры">
                            <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
                        </a>

                        <footer class="product__footer">
                            <div class="product__price-favorite">
                                <p class="product__price">руб 2999</p>
                                <button class="btn product__favorite product__favorite_active"
                                        aria-label="Добавить в избранное">
                                    <svg class="icon icon-favorite"
                                            width="24"
                                            height="24">
                                        <use href="img/sprite.svg#favorite"></use>
                                    </svg>
                                </button>
                            </div>
                            <ul class="product__color-list">
                                <li class="product__color-item">
                                    <div class="color color_red color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_red"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose"></div>
                                </li>
                            </ul>
                        </footer>
                    </article>
                </li>
            </ul>
        </div>
    `;
