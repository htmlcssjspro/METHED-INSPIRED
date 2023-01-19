export default async function getData(apiUrl, searchParams, cbError = () => {}) {
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
