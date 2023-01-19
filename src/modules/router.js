import Navigo from 'navigo';
import { DATA } from './const';
import renderCategoryMain from './render/render-category-main';
import renderGenderMain from './render/render-gender-main';
import renderFooter from './render/render-footer';
import { renderHeader } from './render/render-header';


export const router = new Navigo('/', { hash: true });
// export const router = new Navigo('/', { mode: 'history' });


export default function routerInit() {
    router.on('*', () => {
        renderHeader();
        renderFooter();
    });

    router.on(() => {
        renderGenderMain();
    });

    for (const gender in DATA.navigation) {
        router.on(`/${gender}`, () => {
            renderGenderMain(gender);
        });

        DATA.navigation[gender].list.map(category => {
            router.on(`/${gender}/${category.slug}`, () => {
                renderCategoryMain(category.slug);
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
