import renderNavigation from '../render/renderNavigation';
import renderHero from '../render/renderHero';
import renderProducts from '../render/products/renderProducts';
import renderCart from '../render/renderCart';
import renderCard from '../render/renderCard';
import { getGoodsListById } from './apiController';
import { cartGoodsStore, getCartList } from './cartController';


export default async function cartPageController() {
    console.log('cartController()');
    const cartIdList = getCartList().map(item => item.id);
    const cartListData = await getGoodsListById(cartIdList, 1, 'all');
    cartGoodsStore.add(cartListData);

    renderNavigation({ show: false });
    renderHero({ show: false });
    renderCard({ show: false });
    renderProducts({ show: false });

    renderCart({});
}
