import renderNavigation from '../render/renderNavigation';
import renderHero from '../render/renderHero';
import renderProducts from '../render/products/renderProducts';
import renderCart from '../render/renderCart';
import renderCard from '../render/renderCard';

export default function homePageController(gender = 'women') {
    console.log(`homePageController(${gender})`); // TODO Delete

    renderCard({ show: false });
    renderCart({ show: false });

    renderNavigation({ gender });
    renderHero({ gender });
    renderProducts({ gender, pageName: 'home' });
}
