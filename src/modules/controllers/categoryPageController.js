import renderNavigation from '../render/renderNavigation';
import renderHero from '../render/renderHero';
import renderProducts from '../render/products/renderProducts';
import renderCard from '../render/renderCard';
import renderCart from '../render/renderCart';

export default function categoryPageController(gender, category, page) {
    console.log(`categoryPageController(${gender}, ${category}, ${page})`); // TODO Delete

    renderHero({ show: false });
    renderCard({ show: false });
    renderCart({ show: false });

    renderNavigation({ gender, category });
    renderProducts({ gender, category, page, pageName: 'category' });
}
