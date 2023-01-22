import { API_HOST } from '../const';
import { getOneGoodById } from '../controllers/apiController';
import createElement from '../service/createElement';

const $card = document.querySelector('.card');

const $container = createElement('div', {
    className: 'container card__container',
});

const $img = createElement('img', {
    className: 'card__image',
    src:       `${API_HOST}/img/8688273634.jpg`,
    alt:       'Пижама со штанами шелковая',
}, {
    parent: $container
});

const $content = createElement('form', {
    className: 'card__image',
    id:        'order',
    innerHTML: `
        <h2 class="card__title">Пижама со штанами шелковая</h2>
        <p class="card__price">руб 6999</p>
    `
}, {
    parent: $container
});

const $vendorCode = createElement('div', {
    className: 'card__vendor-code',
    innerHTML: `
        <span class="card__subtitle">Артикул</span>
        <span class="card__id">089083</span>
        <input type="hidden" name="id" value="089083">
    `
}, {
    parent: $content
});

const $color = createElement('div', {
    className: 'card__color',
    innerHTML: `
        <p class="card__subtitle card__color-title">Цвет</p>
        <div class="card__color-list">
            <label class="card__color-item color color_black color_checked">
                <input class="input-hide"
                        type="radio"
                        name="color"
                        value="black"
                        checked>
            </label>
            <label class="card__color-item color color_red">
                <input class="input-hide"
                        type="radio"
                        name="color"
                        value="red">
            </label>
        </div>
    `
}, {
    parent: $content
});

const $size = createElement('div', {
    className: 'card__size',
    innerHTML: `
        <p class="card__subtitle card__size-title">Размер</p>

        <div class="card__size-list">
            <label class="card__size-item size">
                <input class="input-hide" type="radio" name="size" value="XS">XS
            </label>
            <label class="card__size-item size">
                <input class="input-hide" type="radio" name="size" value="S">S
            </label>
            <label class="card__size-item size">
                <input class="input-hide" type="radio" name="size" value="M">M
            </label>
            <label class="card__size-item size">
                <input class="input-hide" type="radio" name="size" value="L">L
            </label>
            <label class="card__size-item size">
                <input class="input-hide" type="radio" name="size" value="XL">XL
            </label>
        </div>
    `
}, {
    parent: $content
});

const $description = createElement('div', {
    className: 'card__description',
    innerHTML: `
        <p class="card__subtitle card__description-title">Описание</p>
        <p class="card__description-text">Домашняя женская пижама с сорочкой и штанами из шелка</p>
    `
}, {
    parent: $content
});

const $control = createElement('div', {
    className: 'card__control',
    innerHTML: `
        <div class="card__count count">
            <button class="count__item count__minus">-</button>
            <span class="count__item count__number">1</span>
            <button class="count__item count__plus">+</button>
            <input type="hidden" name="count" value="1">
        </div>
        <button class="card__add-cart button card__button" type="submit">В корзину</button>
        <button class="card__favorite favorite" aria-label="Добавить в избранное" type="button" data-id="321654">
            <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="transparent" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"></path>
            </svg>
        </button>
    `
}, {
    parent: $content
});

export default async function renderCard({ id, show = true }) {
    console.log(`renderCard({ id:${id}, show:${show} })`); // TODO Delete

    if (!show) {
        $container.remove();
        return;
    }

    $container.style.display = '';

    let response = await getOneGoodById(id);
    console.log(`renderCard({ id:${id} })::response: `, response); // TODO Delete

    $card.append($container);

    const { gender, category } = response;
    return { gender, category };
}
