import renderHero from '../render/renderHero';
import renderCard from '../render/renderCard';
import renderCart from '../render/renderCart';
import renderNavigation from '../render/renderNavigation';
import renderProducts from '../render/products/renderProducts';

export default function searchPageController(routerData) {
    console.log('searchPageController(routerData)::routerData:', routerData); // TODO Delete

    const { search, page } = routerData.params;

    renderHero({ show: false });
    renderCard({ show: false });
    renderCart({ show: false });

    renderNavigation({ reset: true });
    renderProducts({ search, page, pageName: 'search' });
}
