import renderNavigation from '../render/renderNavigation';
import renderHero from '../render/renderHero';
import renderProducts from '../render/products/renderProducts';
import renderCart from '../render/renderCart';
import renderCard from '../render/renderCard';

export default function cartController() {
    console.log('cartController()');

    renderNavigation({ show: false });
    renderHero({ show: false });
    renderCard({ show: false });
    renderProducts({ show: false });

    renderCart({});
}


export function getCartList() {
    const cartList = localStorage.getItem('cart');
    return cartList ? JSON.parse(cartList) : [];
}

function setCartList(cartList) {
    localStorage.setItem('cart', JSON.stringify(cartList));
}

export function addProductToCart(product) {
    let inCart = false;
    const cartList = getCartList().map(item => {
        if (
            item.id === product.id
            && item.color === product.color
            && item.size === product.size
        ) {
            item.count = product.count;
            inCart = true;
        }
        return item;
    });

    if (!inCart) {
        cartList.push(product);
    }

    setCartList(cartList);
}

export function removeProductFromCart(product) {
    // const cartList = getCartList().filter(item =>
    //     !(
    //         item.id === product.id
    //         && item.color === product.color
    //         && item.size === product.size
    //     )
    // );

    const cartList = getCartList();
    const index = cartList.findIndex(item => item.id === product.id);
    if (index === -1) return;
    cartList.splice(index, 1);

    setCartList(cartList);
    return true;
}
