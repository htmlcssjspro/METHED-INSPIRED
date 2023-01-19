import './index.html';
import './index.scss';
import routerInit from './modules/router';
import { API_URL, DATA } from './modules/const';
import getData from './modules/service/get-data';
import createCssColors from './modules/create-css-colors';


const init = async () => {
    DATA.navigation = await getData(`${API_URL}/categories`);
    DATA.novelties = await getData(`${API_URL}/novelties`);
    DATA.colors = await getData(`${API_URL}/colors`);

    createCssColors();
    routerInit();
};

init();
