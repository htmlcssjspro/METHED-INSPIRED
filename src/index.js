import './index.html';
import './index.scss';
import { router } from './modules/router';
import womenMainPage from './modules/main/women-main-page';
import menMainPage from './modules/main/men-main-page';
import renderHome from './modules/render/render-home';
import renderMain from './modules/render/render-main';
import renderInit from './modules/render/render-init';

renderInit();

router.on('*', () => {
    //
});

router.on('/', () => {
    renderHome();
});

router.on('/women', () => {
    womenMainPage();
});

router.on('/men', () => {
    menMainPage();
});

router.resolve();
