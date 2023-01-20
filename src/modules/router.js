import Navigo from 'navigo';
import { DATA } from './const';
import renderCategoryMain from './render/render-category-main';
import renderGenderMain from './render/render-gender-main';


export const router = new Navigo('/', { hash: true });
// export const router = new Navigo('/', { mode: 'history' });


export default function routerInit() {
    router.on('*', () => {
        // renderHeader();
        // renderFooter();
    });

    router.on(() => {
        renderGenderMain();
    });

    router.on('search', ({ params }) => {
        //
    });

    router.on('/:gender/:category', renderCategoryMain);

    for (const gender in DATA.navigation) {
        router.on(`/${gender}`, () => {
            renderGenderMain(gender);
        });

        DATA.navigation[gender].list.map(category => {
            router.on(`/${gender}/${category.slug}`, (data) => {
                // renderCategoryMain(category.slug);
                // renderCategoryMain(data);
            });
        });
    }

    router.resolve();
}

export const addRout = (path, cb) => {
    router.on(path, () => {
        cb();
    });
    router.updatePageLinks();
};
