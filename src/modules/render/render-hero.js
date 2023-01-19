import { DATA } from '../const';
import { router } from '../router';
import createElement from '../service/create-element';


const $hero = document.querySelector('.hero');

const $container = createElement('div', {
    className: 'container'
}, {
    parent: $hero,
});

const $content = createElement('div', {
    className: 'hero__content',
}, {
    parent: $container
});

const $title = createElement('h2', {
    className:   'hero__title',
    textContent: '',
}, {
    parent: $content
});

const $link = createElement('a', {
    className:   'link hero__link',
    href:        '#',
    textContent: 'Перейти'
}, {
    parent: $content,
    cb(element){
        element.dataset.navigo = true;
    }
});

export default function renderHero(gender) {
    console.log(`renderHero(${gender})`); // TODO Delete

    if (!gender) {
        $hero.style.display = 'none';
        return;
    }

    $hero.style.display = '';

    $hero.className = `hero hero_${gender}`;

    $title.textContent = DATA.novelties[gender].title;
    $link.href = `/products/${DATA.novelties[gender].goodId}`;
    router.updatePageLinks();
}

// TODO Delete
const $heroInnerHTML = `
    <div class="container">
        <div class="hero__content">
            <h2 class="hero__title">
                <span>Новая коллекция</span>
                <br>
                <span>Бюстгальтер-балконет</span>
            </h2>
            <a class="link hero__link"
                href="#">Перейти</a>
        </div>
    </div>
`;
