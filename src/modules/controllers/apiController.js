import { API_URL } from '../const';

async function getData(apiUrl, searchParams, cbError = () => {}) {
    const url = new URL(apiUrl);

    try {
        if (searchParams && typeof searchParams === 'object') {
            for (const name in searchParams) {
                if (Object.hasOwnProperty.call(searchParams, name)) {
                    url.searchParams.set(name, searchParams[name]);
                }
            }
        }

        const response = await fetch(url);

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        console.error(error);
        if (typeof searchParams === 'function') {
            searchParams(error);
        } else {
            cbError(error);
        }

    }
}

export async function getCategories() {
    return await getData(`${API_URL}/categories`);
}

export async function getColors() {
    return await getData(`${API_URL}/colors`);
}

export async function getAllGoods() {
    return await getData(`${API_URL}/goods`);
}

export async function getOneGoodById(id) {
    return await getData(`${API_URL}/goods/${id}`);
}

async function getGoodsByParams(params) {
    return await getData(`${API_URL}/goods`, params);
}

export async function getGoodsListById(list) {
    return await getGoodsByParams({ list });
}

export async function getGoodsByGender(gender) {
    return await getGoodsByParams({ gender });
}

export async function getGoodsByGenderAndCategory(gender, category, page = 1, count = 12) {
    return await getGoodsByParams({ gender, category, page, count });
}

export async function searchGoods(search, page = 1, count = 12) {
    return await getGoodsByParams({ search, page, count });
}


export async function order($form) {
    const response = await fetch(`${API_URL}/order`, {
        method: 'POST',
        body:   new FormData($form)
    });

    return response;
}
