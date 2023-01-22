import renderNavigation from '../render/renderNavigation';
import renderHero from '../render/renderHero';
import renderProducts from '../render/products/renderProducts';
import renderCart from '../render/renderCart';

export default function cartController() {
    console.log('cartController()');

    renderNavigation({ show: false });
    renderHero({ show: false });
    renderProducts({ show: false });

    renderCart({});
}
