export const cartGoodsStore = {
    goods: [],
    _add(product){
        if (!this.goods.some(item => item.id === product.id)) {
            this.goods.push(product);
        }
    },
    add(goods) {
        if (Array.isArray(goods)) {
            goods.forEach(product => {
                this._add(product);
            });
        } else {
            this._add(goods);
        }
    },
    getProduct(id){
        return this.goods.find(item => item.id === id);
    },
};

export const cartTotalPrice = {
    $headerCartLink: null,
    elem:            null,
    total:           0,
    calc(elem) {
        const cartList = getCartList();
        if (!this.$headerCartLink) {
            this.$headerCartLink = document.querySelector('.header__link_cart');
        }
        this.$headerCartLink.dataset.count = cartList.length;
        this.total = cartList.reduce((acc, item) => {
            const product = cartGoodsStore.getProduct(item.id);
            return acc + product?.price * item.count;
        }, 0);

        if (elem) {
            this.elem = elem;
        }

        if (this.elem) {
            this.elem.innerHTML = `руб&nbsp;${this.total}`;
        }
    }
};

export function getCartList() {
    const cartList = localStorage.getItem('cart');
    return cartList ? JSON.parse(cartList) : [];
}

export function clearCart() {
    localStorage.removeItem('cart');
    cartTotalPrice.calc();
}

function setCartList(cartList) {
    cartList.sort((a, b) => a.id - b.id);
    localStorage.setItem('cart', JSON.stringify(cartList));
    cartTotalPrice.calc();
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
