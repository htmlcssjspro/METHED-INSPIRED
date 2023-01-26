import createElement from '../../service/createElement';
import logo from '../../../img/logo.svg';
import { router } from '../../router';
import debounce from '../../service/debounce';

const $header = document.querySelector('.header');

const $headerSearchButton = createElement('button', {
    className: 'heder__link search-button',
    title:     'Поиск',
    innerHTML: `
        <svg width="24"
            height="24"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" />
            <path stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.4431 16.4438L20.9994 21.0002" />
        </svg>
    `,
});

const $headerCartLink = createElement('a', {
    className: 'heder__link',
    href:      '/cart',
    title:     'Корзина',
    innerHTML: `
        <svg width="24"
            height="24"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5787 6.75H4.42122C4.23665 6.75 4.05856 6.81806 3.92103 6.94115C3.7835 7.06425 3.69619 7.23373 3.67581 7.41718L2.34248 19.4172C2.33083 19.522 2.34143 19.6281 2.37357 19.7286C2.40572 19.829 2.4587 19.9216 2.52904 20.0002C2.59939 20.0788 2.68553 20.1417 2.78182 20.1847C2.87812 20.2278 2.98241 20.25 3.08789 20.25H20.912C21.0175 20.25 21.1218 20.2278 21.2181 20.1847C21.3144 20.1417 21.4005 20.0788 21.4708 20.0002C21.5412 19.9216 21.5942 19.829 21.6263 19.7286C21.6585 19.6281 21.6691 19.522 21.6574 19.4172L20.3241 7.41718C20.3037 7.23373 20.2164 7.06425 20.0789 6.94115C19.9413 6.81806 19.7632 6.75 19.5787 6.75Z" />
            <path stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75" />
        </svg>
    `,
}, {
    cb(element){
        element.dataset.navigo = true;
    }
});

const $headerFavoriteLink = createElement('a', {
    className: 'heder__link',
    href:      '/favorite',
    title:     'Избранное',
    innerHTML: `
        <svg width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="transparent"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z" />
        </svg>
    `,
}, {
    cb(element){
        element.dataset.navigo = true;
    }
});

const renderHeaderTop = () => {
    const $headerTop = createElement('div', {
        className: 'container header__container header__container_top header__header',
        innerHTML: `
        <a class="link header__link header__phone" href="tel:+79304902620">8 930 490 26 20</a>
        <a class="link header__link header__logo" href="/" data-navigo>
            <img class="logo" src="${logo}" alt="Логотип Inspired">
        </a>
    `,
    });

    const $headerControl = createElement('nav', {
        className: 'nav header__control',
    }, {
        parent: $headerTop,
    });


    const createHeaderNavItem = (append) => createElement('li', {
        className: 'nav__item header__nav-item',
    }, { append });

    const $headerNavListControl = createElement('ul', {
        className: 'nav__list header__nav-list header__nav-list_control',
    }, {
        parent: $headerControl,
        append: [
            createHeaderNavItem($headerSearchButton),
            createHeaderNavItem($headerCartLink),
            createHeaderNavItem($headerFavoriteLink),
        ]
    });

    return $headerTop;
};

const renderSearch = () => {
    const $search = createElement('div', {
        className: 'container header__container header__container_search search',
    });

    const $searchForm = createElement('form', {
        className: 'search__form'
    }, {
        parent: $search,
    });

    const $searchInput = createElement('input', {
        className:   'search__input',
        type:        'search',
        name:        'search',
        placeholder: 'Найти...',
        autofocus:   true,
    }, {
        parent: $searchForm,
    });

    const $searchButton = createElement('button', {
        className:   'button search__button',
        type:        'submit',
        textContent: 'Искать'
    }, {
        parent: $searchForm,
    });

    return { $search, $searchForm, $searchInput, $searchButton };
};

const renderHeaderBottom = () => {
    const $headerBottom = createElement('div', {
        className: 'container header__container header__container_bottom header__navigation',
    });

    const $headerNav = createElement('nav', {
        className: 'nav header__nav'
    }, {
        parent: $headerBottom
    });

    const $genderList = createElement('ul', {
        className: 'nav__list header__nav-list gender gender_header'
    }, {
        parent: $headerNav,
    });

    const $categoryList = createElement('ul', {
        className: 'nav__list header__nav-list category'
    }, {
        parent: $headerNav,
    });

    return { $headerBottom, $headerNav, $genderList, $categoryList };
};


const $headerTop = renderHeaderTop();
export const { $headerBottom, $headerNav, $genderList, $categoryList } = renderHeaderBottom();

const { $search, $searchForm, $searchInput, $searchButton } = renderSearch();

const toggle$search = event => {
    $search.classList.toggle('search_show');
    $searchInput.focus();
};

const search = event => {
    event.preventDefault();
    if ($searchForm.search.value.trim()) {
        router.navigate(`search?search=${$searchForm.search.value}`);
    }
};

$headerSearchButton.addEventListener('click', toggle$search, false);
$searchInput.addEventListener('input', debounce(search), false);
$searchInput.addEventListener('change', search, false);
$searchForm.addEventListener('submit', search, false);

export default function renderHeader() {
    console.log('renderHeader()'); // TODO Delete

    $header.prepend($headerTop);
    $header.append($search);
    $header.append($headerBottom);
}
