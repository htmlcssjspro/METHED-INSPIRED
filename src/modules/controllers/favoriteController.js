import renderHero from '../render/renderHero';
import renderCard from '../render/renderCard';
import renderCart from '../render/renderCart';
import renderNavigation from '../render/renderNavigation';
import renderProducts from '../render/products/renderProducts';

const $products = document.querySelector('.products');

$products.addEventListener('click', event => {
    const t = event.target;
    const $productFavoriteButton = t.closest('.product__favorite');
    const $productFavoriteActiveButton = t.closest('.product__favorite_active');

    if ($productFavoriteActiveButton) {
        $productFavoriteActiveButton.classList.remove('product__favorite_active');
        removeFavorite($productFavoriteActiveButton.dataset.id);
        return;
    }

    if ($productFavoriteButton) {
        $productFavoriteButton.classList.add('product__favorite_active');
        addFavorite($productFavoriteButton.dataset.id);
    }
});

export function getFavorite() {
    const favoriteList = localStorage.getItem('favorite');
    return favoriteList ? JSON.parse(favoriteList) : [];
}

function setFavorite(favoriteList) {
    localStorage.setItem('favorite', JSON.stringify(favoriteList));
}

function addFavorite(id) {
    const favoriteList = getFavorite();
    favoriteList.push(id);
    setFavorite(favoriteList);
}

function removeFavorite(id) {
    const favoriteList = getFavorite();
    const index = favoriteList.findIndex(item => item === id);
    if (index === -1) return;
    favoriteList.splice(index, 1);
    setFavorite(favoriteList);
}

export function favoriteController() {
    console.log('favoriteController()'); // TODO Delete

    const list = getFavorite();

    renderHero({ show: false });
    renderCard({ show: false });
    renderCart({ show: false });

    renderNavigation({ reset: true });
    renderProducts({ list, pageName: 'favorite' });
}
