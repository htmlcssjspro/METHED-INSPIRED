import { API_URL } from '../const';

export function sendOrder(order) {
    return fetch(`${API_URL}/order`, {
        method: 'POST',
        body:   JSON.stringify(order)
    })
        .then(response => response.json())
        .catch(error => console.error(error));
}
