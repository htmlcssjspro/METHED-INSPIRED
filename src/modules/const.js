const { protocol, hostname } = window.location;
const port = '3000';
export const API_HOST = `${protocol}//${hostname}:${port}`;
export const API_URL = `${API_HOST}/api`;
export const PAGINATION_COUNT = 3;
export const DATA = {};
export const TITLE = {
    women: {
        title: 'Новая коллекция Бюстгалтер-балконет',
        id:    ''
    },
    men: {
        title: 'Боксеры из новой коллекции',
        id:    ''
    }
};
