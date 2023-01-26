import './index.html';
import './index.scss';
import routerInit from './modules/router';
import { DATA } from './modules/const';
import createCssColors from './modules/createCssColors';
import createElement from './modules/service/createElement';
import renderHeader from './modules/render/common/renderHeader';
import renderFooter from './modules/render/common/renderFooter';
import { getCategories, getColors } from './modules/controllers/apiController';
import { favoriteInit } from './modules/controllers/favoriteController';


const init = async () => {
    try {
        DATA.navigation = await getCategories();
        DATA.colors = await getColors();

        renderHeader();
        renderFooter();
        createCssColors();
        routerInit();
        favoriteInit();
    } catch (error) {
        console.error(error);
        createElement('h2', {
            textContent: 'Что-то пошло не так, попробуйте позже...'
        }, {
            parent: document.querySelector('main'),
            cb(h2) {
                h2.style.textAlign = 'center';
            }
        });
    } finally {
        console.log('finally');
    }


};

init();
