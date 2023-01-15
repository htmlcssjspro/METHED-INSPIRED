import createElement from '../create-element';
import getNavigationData from '../navigation-data';

const $header = document.querySelector('.header');

const $headerBottom = createElement('div', {
    className: 'container header__container header__container_bottom',
}, {
    parent: $header
});

const headerNav = createElement('nav', {
    className: 'nav header__nav'
}, {
    parent: $headerBottom
});

const genderList = createElement('ul', {
    className: 'nav__list header__nav-list gender gender_header'
}, {
    parent: headerNav,
});

const categoryList = createElement('ul', {
    className: 'nav__list header__nav-list category'
}, {
    parent: headerNav,
});

const navigationData = getNavigationData();

for (const genderName in navigationData) {
    createElement('li', {
        className: 'nav__item header__nav-item gender__item',
    }, {
        parent: genderList,
        append: createElement('a', {
            className:   `link header__link gender__link ${'women' === genderName ? 'gender__link_active gender__link_default' : ''}`,
            href:        `/${genderName}`,
            textContent: navigationData[genderName].title
        }, {
            cb(element){
                element.dataset.navigo = true;
                element.addEventListener('click', event => {
                    document.querySelector('.gender__link_active')
                        ?.classList.remove('gender__link_active');
                    event.currentTarget.classList.add('gender__link_active');
                });
            }
        })
    });
}

const defaultGenderLink = document.querySelector('.gender__link_default');

export default function renderNavigation(gender = 'women') {

    if (gender === 'women') {
        document.querySelector('.gender__link_active')
            ?.classList.remove('gender__link_active');
        defaultGenderLink.classList.add('gender__link_active');
    }

    categoryList.textContent = '';

    navigationData[gender].list.map(item =>
        createElement('li', {
            className: 'nav__item header__nav-item category__item',
        }, {
            parent: categoryList,
            append: createElement('a', {
                className:   'link header__link category__link',
                href:        `/${gender}/${item.slug}`,
                textContent: item.title,
            }, {
                cb(element){
                    element.dataset.navigo = true;
                    element.addEventListener('click', event => {
                        document.querySelector('.category__link_active')
                            ?.classList.remove('category__link_active');
                        event.currentTarget.classList.add('category__link_active');
                    });
                }
            })
        })
    );
}
