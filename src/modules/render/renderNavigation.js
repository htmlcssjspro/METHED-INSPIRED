import { router } from '../router';
import { DATA } from '../const';
import { $headerNav, $genderList, $categoryList } from './common/renderHeader';
import createElement from '../service/createElement';


const resetGender = () => {
    const active = document.querySelector('.gender__link_active');
    active?.classList.remove('gender__link_active');
};

const resetCategory = () => {
    const active = document.querySelector('.category__link_active');
    active?.classList.remove('category__link_active');
};

const changeActiveCategory = event => {
    resetCategory();
    event.currentTarget.classList.add('category__link_active');
};

const cleanNavigation = () => {
    $genderList.textContent = '';
    $categoryList.textContent = '';
};

const removeNavigation = () => {
    $genderList.remove();
    $categoryList.remove();
};

const defaultGender = 'women';

let flag = false;
let previousGender = '';
let previousCategory = '';

export default function renderNavigation({ gender = '', category = '', reset = false, show = true }) {
    console.log(`renderNavigation({ gender:${gender}, category:${category}, reset:${reset}, show:${show} })`);

    if (!show) {
        removeNavigation();
        flag = false;
        return;
    }

    if (flag && reset) {
        resetGender();
        resetCategory();
        return;
    }

    // if (flag && gender === previousGender && category === previousCategory) return;

    cleanNavigation();

    for (const genderName in DATA.navigation) {
        createElement('li', {
            className: 'nav__item header__nav-item gender__item',
        }, {
            parent: $genderList,
            append: createElement('a', {
                className:   `link header__link gender__link ${genderName === gender ? 'gender__link_active' : ''}`,
                href:        `/${genderName}`,
                textContent: DATA.navigation[genderName].title
            }, {
                cb(element){
                    element.dataset.navigo = true;
                    router.updatePageLinks();
                }
            })
        });
    }

    if (!DATA.navigation[gender]) {
        gender = defaultGender;
    }

    previousGender = gender;

    DATA.navigation[gender].list.map(({ slug, title }) => {
        createElement('li', {
            className: 'nav__item header__nav-item category__item',
        }, {
            parent: $categoryList,
            append: createElement('a', {
                className:   `link header__link category__link ${slug === category ? 'category__link_active' : ''}`,
                href:        `/${gender}/${slug}`,
                textContent: title,
            }, {
                cb(element){
                    element.dataset.navigo = true;
                    router.updatePageLinks();
                    // element.addEventListener('click', changeActiveCategory);
                }
            })
        });
    });

    previousCategory = category;

    flag = true;

    $headerNav.append($genderList, $categoryList);
}
