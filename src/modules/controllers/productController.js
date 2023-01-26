import renderHero from '../render/renderHero';
import renderCart from '../render/renderCart';
import renderNavigation from '../render/renderNavigation';
import renderCard from '../render/renderCard';
import renderProducts from '../render/products/renderProducts';

export default async function productController(routerData) {
    console.log('productController(routerData)::routerData', routerData);

    const { id } = routerData.data;

    renderHero({ show: false });
    renderCart({ show: false });

    renderNavigation({ reset: true });
    const { gender, category } = await renderCard({ id });
    // renderProducts({ gender, category, count: 4, pageName: 'product' });
    renderProducts({ gender, count: 4, pageName: 'product' });
}
