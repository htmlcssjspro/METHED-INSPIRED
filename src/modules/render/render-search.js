import createElement from '../service/create-element';
import { searchButton } from './render-header';

export const $search = createElement('div', {
    className: 'container header__container header__container_search search',
});

const $form = createElement('form', {
    className: 'search__form'
}, {
    parent: $search
});

const button = createElement('button', {
    className: 'button search__button'
}, {
    parent: $form,
    cb(element) {
        element.addEventListener('click', () => {}, false);
    }
});

export function searchToggle(){
    $search.classList.toggle('search_show');
}

searchButton.addEventListener('click', searchToggle, false);

// export default function renderSearch() {
// }
