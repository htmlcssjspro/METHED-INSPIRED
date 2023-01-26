import Navigo from 'navigo';
import { DATA } from './const';
import homePageController from './controllers/homePageController';
import categoryPageController from './controllers/categoryPageController';
import searchPageController from './controllers/searchPageController';
import productController from './controllers/productController';
import cartPageController from './controllers/cartPageController';
import favoritePageController from './controllers/favoritePageController';


export const router = new Navigo('/', { hash: true });
// export const router = new Navigo('/', { mode: 'history' });


export default function routerInit() {
    router.on('*', () => {
        // renderHeader();
        // renderFooter();
    });

    router.on(() => {
        homePageController();
    });

    router.on('/search', searchPageController);
    router.on('/cart', cartPageController);
    router.on('/favorite', favoritePageController);
    router.on('/product/:id', productController);

    for (const gender in DATA.navigation) {
        router.on(`/${gender}`, () => {
            homePageController(gender);
        });

        // router.on(`/${gender}/:category`, (routerData) => {
        //     console.log('routerData: ', routerData);
        //     const { category } = routerData.data;
        //     const page = routerData.params?.page;
        //     categoryPageController({ gender, category, page });
        // });

        DATA.navigation[gender].list.map(category => {
            router.on(`/${gender}/${category.slug}`, (routerData) => {
                const page = routerData.params?.page;
                categoryPageController(gender, category.slug, page);
            });
        });
    }


    // router.on('/:gender/:category', categoryPageController);

    router.resolve();
}

export const addRout = (path, cb) => {
    router.on(path, cb);
    router.updatePageLinks();
};
