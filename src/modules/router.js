import Navigo from 'navigo';

export const hashRouter = new Navigo('/', { hash: true });
export const router = new Navigo('/', { mode: 'history' });
