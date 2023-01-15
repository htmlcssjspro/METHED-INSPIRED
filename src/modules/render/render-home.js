import renderHero from './render-hero';
import renderNavigation from './render-navigation';
import renderProducts from './render-products.1';

export default function renderHome() {
    renderNavigation();
    renderHero();
    renderProducts();
}
