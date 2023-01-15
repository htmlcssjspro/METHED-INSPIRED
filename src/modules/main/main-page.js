import renderHero from '../render/render-hero';
import renderNavigation from '../render/render-navigation';
import renderProducts from '../render/render-products.1';

export default function mainPage(gender = 'women') {
    renderNavigation(gender);
    renderHero(gender);
    renderProducts();
}
