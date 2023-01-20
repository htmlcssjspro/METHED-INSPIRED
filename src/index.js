import './index.html';
import './index.scss';
import routerInit from './modules/router';
import { API_URL, DATA } from './modules/const';
import getData from './modules/service/get-data';
import createCssColors from './modules/create-css-colors';
import createElement from './modules/service/create-element';
import { renderHeader } from './modules/render/render-header';
import renderFooter from './modules/render/render-footer';


const init = async () => {
    try {
        DATA.navigation = await getData(`${API_URL}/categories`);
        // DATA.novelties = await getData(`${API_URL}/novelties`);
        DATA.colors = await getData(`${API_URL}/colors`);

        renderHeader();
        renderFooter();
        createCssColors();
        routerInit();
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
