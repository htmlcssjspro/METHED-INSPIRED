import renderNavigation from './render-header';
import renderHero from './render-hero';
import renderProducts from './render-products';

export default function renderGenderMain(gender = 'women') {
    console.log(`renderGenderMain(${gender})`); // TODO Delete

    renderNavigation(gender);
    renderHero(gender);
    renderProducts({ gender });
}
