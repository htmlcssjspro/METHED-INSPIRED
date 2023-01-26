import renderHero from '../render/renderHero';
import renderCard from '../render/renderCard';
import renderCart from '../render/renderCart';
import renderNavigation from '../render/renderNavigation';
import renderProducts from '../render/products/renderProducts';
import { getFavorite } from './favoriteController';


export default function favoritePageController() {
    console.log('favoriteController()'); // TODO Delete

    const list = getFavorite();

    renderHero({ show: false });
    renderCard({ show: false });
    renderCart({ show: false });

    renderNavigation({ reset: true });
    renderProducts({ list, pageName: 'favorite' });
}
