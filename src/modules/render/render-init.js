import renderFooter from './render-footer';
import renderHeader from './render-header';
import renderHero from './render-hero';
import renderNavigation from './render-navigation';
import renderProducts from './render-products.1';

export default function renderInit() {
    renderHeader();
    renderNavigation();
    renderHero();
    renderProducts();
    renderFooter();
}
