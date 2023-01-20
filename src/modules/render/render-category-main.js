import renderNavigation from './render-header';
import renderHero from './render-hero';
import renderProducts from './render-products';

export default function renderCategoryMain(routerData) {
    console.log('renderCategoryMain()');
    console.log(routerData);

    const { gender, category } = routerData.data;
    const searchParams = { gender, category };

    if (routerData.params?.page) {
        searchParams.page = routerData.params.page;
    }

    renderNavigation(gender, category);
    renderHero();
    renderProducts(searchParams);
}
