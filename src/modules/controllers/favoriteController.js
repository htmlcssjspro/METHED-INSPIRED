export function getFavorite() {
    const favoriteList = localStorage.getItem('favorite');
    return favoriteList ? JSON.parse(favoriteList) : [];
}

function setFavorite(favoriteList) {
    localStorage.setItem('favorite', JSON.stringify(favoriteList));
}

function addFavorite(id) {
    const favoriteList = getFavorite();
    favoriteList.push(id);
    setFavorite(favoriteList);
}

function removeFavorite(id) {
    const favoriteList = getFavorite();
    const index = favoriteList.findIndex(item => item === id);
    if (index === -1) return;
    favoriteList.splice(index, 1);
    setFavorite(favoriteList);
}

export function favoriteInit() {
    document.body.addEventListener('click', event => {
        const t = event.target;
        const $favoriteButton = t.closest('.favorite');
        const $favoriteActiveButton = t.closest('.favorite_active');

        if ($favoriteActiveButton) {
            $favoriteActiveButton.classList.remove('favorite_active');
            removeFavorite($favoriteActiveButton.dataset.id);
            return;
        }

        if ($favoriteButton) {
            $favoriteButton.classList.add('favorite_active');
            addFavorite($favoriteButton.dataset.id);
        }
    });
}
