import { DATA, TITLE } from '../const';
import { router } from '../router';
import createElement from '../service/createElement';


const $hero = document.querySelector('.hero');

const $container = createElement('div', {
    className: 'container'
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

export default function renderHero({ gender, show = true }) {
    console.log(`renderHero({ gender:${gender}, show:${show} })`); // TODO Delete

    $container.remove();
    if (!show) return;

    $hero.className = `hero hero_${gender}`;
    $title.textContent = TITLE[gender].title;
    $link.href = `/products/${TITLE[gender].goodId}`;

    $hero.append($container);
    router.updatePageLinks();
}
