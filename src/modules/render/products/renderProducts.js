import { API_HOST, DATA } from '../../const';
import createElement from '../../service/createElement';
import sprite from '../../../img/sprite.svg';
import renderPagination from './renderPagination';
import { getFavorite } from '../../controllers/favoriteController';
import { router } from '../../router';
import { getGoodsByGender, getGoodsByGenderAndCategory, getGoodsListById, searchGoods } from '../../controllers/apiController';

const $products = document.querySelector('.products');

const $container = createElement('div', {
    className: 'container'
});

const $title = createElement('h2', {
    className:   'products__title',
    textContent: 'Новинки'
}, {
    parent: $container,
});
const $titleSup = createElement('sup', {
    className: 'products__title-sup',
}, {
    parent: $title,
});

const $productsList = createElement('ul', {
    className: 'products__list'
}, {
    parent: $container
});

const $searchMessage = createElement('p', {
    className:   'products__message',
    textContent: 'По вашему запросу ничего не найдено'
});

const getTitle = (pageName, gender, category) => {
    const title = {
        home:     'Новинки',
        category: DATA.navigation[gender]?.list.find(item => item.slug === category)?.title,
        product:  'Вам также может понравиться',
        favorite: 'Избранное',
    };

    return title[pageName];
};


export default async function renderProducts({ gender, category, search, list, page, count = 12, pageName, show = true }) {
    console.log(`renderProducts({ gender:${gender}, category:${category}, search:${search}, list:${list}, page:${page}, count:${count} })`); // TODO Delete

    if (!show) {
        $container.remove();
        return;
    }

    if (!gender && !category && !search && !list) return;

    const favoriteList = getFavorite();

    $title.textContent = getTitle(pageName, gender, category);

    let response;

    if (search) {
        response = await searchGoods(search, page);
        $title.textContent = search;
        $titleSup.innerHTML = response.totalCount ? `&nbsp;(${response.totalCount})` : '&nbsp;(0)';
        $title.append($titleSup);
    } else if (list) {
        response = await getGoodsListById(list);
    } else if (gender && category) {
        response = await getGoodsByGenderAndCategory(gender, category, page, count);
    } else if (gender) {
        response = await getGoodsByGender(gender);
    }
    console.log('renderProducts()::response:', response); // TODO Delete

    const goods = response.goods ?? response;
    if (!goods.length) {
        $container.append($searchMessage);
    } else {
        $searchMessage.remove();
    }

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
                        class="btn product__favorite ${favoriteList.includes(product.id) ? 'product__favorite_active' : ''}"
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
                        // style:     `background-color: ${color.code}`, // Вариант 1
                        title:     color.title
                    }, {
                        cb(element){
                            element.style.backgroundColor = color.code; // Вариант 2
                        }
                    })
                });
            })
        });

        return $productsItem;
    });

    $productsList.append(...cardList);
    $container.append($productsList);
    router.updatePageLinks();

    {
        const { page, pages, totalCount } = response;
        renderPagination($container, page, pages, totalCount);
    }

    $products.append($container);

}
