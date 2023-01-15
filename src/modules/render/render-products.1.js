export default function renderProducts(category = 'novelties') {
    const $products = document.querySelector('.products');

    $products.innerHTML = `
        <div class="container">
            <h2 class="products__title">Новинки</h2>

            <ul class="products__list">

                <li class="products__item">
                    <article class="product">
                        <a class="product__link"
                            href="#">
                            <img class="product__img"
                                    src="img/product-01.jpg"
                                    alt="Бюстгальтер-Балконет Wien из Микрофибры">
                            <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
                        </a>

                        <footer class="product__footer">
                            <div class="product__price-favorite">
                                <p class="product__price">руб 2999</p>
                                <button class="btn product__favorite product__favorite_active"
                                        aria-label="Добавить в избранное">
                                    <svg class="icon icon-favorite"
                                            width="24"
                                            height="24">
                                        <use href="img/sprite.svg#favorite"></use>
                                    </svg>
                                </button>
                            </div>
                            <ul class="product__color-list">
                                <li class="product__color-item">
                                    <div class="color color_red color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_red"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose"></div>
                                </li>
                            </ul>
                        </footer>
                    </article>
                </li>

                <li class="products__item">
                    <article class="product">
                        <a class="product__link"
                            href="#">
                            <img class="product__img"
                                    src="img/product-02.jpg"
                                    alt="Бюстгальтер-Балконет Wien из Микрофибры">
                            <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
                        </a>

                        <footer class="product__footer">
                            <div class="product__price-favorite">
                                <p class="product__price">руб 2999</p>
                                <button class="btn product__favorite product__favorite_active"
                                        aria-label="Добавить в избранное">
                                    <svg class="icon icon-favorite"
                                            width="24"
                                            height="24">
                                        <use href="img/sprite.svg#favorite"></use>
                                    </svg>
                                </button>
                            </div>
                            <ul class="product__color-list">
                                <li class="product__color-item">
                                    <div class="color color_red color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_red"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose"></div>
                                </li>
                            </ul>
                        </footer>
                    </article>
                </li>

                <li class="products__item">
                    <article class="product">
                        <a class="product__link"
                            href="#">
                            <img class="product__img"
                                    src="img/product-03.jpg"
                                    alt="Бюстгальтер-Балконет Wien из Микрофибры">
                            <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
                        </a>

                        <footer class="product__footer">
                            <div class="product__price-favorite">
                                <p class="product__price">руб 2999</p>
                                <button class="btn product__favorite product__favorite_active"
                                        aria-label="Добавить в избранное">
                                    <svg class="icon icon-favorite"
                                            width="24"
                                            height="24">
                                        <use href="img/sprite.svg#favorite"></use>
                                    </svg>
                                </button>
                            </div>
                            <ul class="product__color-list">
                                <li class="product__color-item">
                                    <div class="color color_red color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_red"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose"></div>
                                </li>
                            </ul>
                        </footer>
                    </article>
                </li>

                <li class="products__item">
                    <article class="product">
                        <a class="product__link"
                            href="#">
                            <img class="product__img"
                                    src="img/product-04.jpg"
                                    alt="Бюстгальтер-Балконет Wien из Микрофибры">
                            <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
                        </a>

                        <footer class="product__footer">
                            <div class="product__price-favorite">
                                <p class="product__price">руб 2999</p>
                                <button class="btn product__favorite"
                                        aria-label="Добавить в избранное">
                                    <svg class="icon icon-favorite"
                                            width="24"
                                            height="24">
                                        <use href="img/sprite.svg#favorite"></use>
                                    </svg>
                                </button>
                            </div>
                            <ul class="product__color-list">
                                <li class="product__color-item">
                                    <div class="color color_red color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_red"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose"></div>
                                </li>
                            </ul>
                        </footer>
                    </article>
                </li>

                <li class="products__item">
                    <article class="product">
                        <a class="product__link"
                            href="#">
                            <img class="product__img"
                                    src="img/product-01.jpg"
                                    alt="Бюстгальтер-Балконет Wien из Микрофибры">
                            <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
                        </a>

                        <footer class="product__footer">
                            <div class="product__price-favorite">
                                <p class="product__price">руб 2999</p>
                                <button class="btn product__favorite"
                                        aria-label="Добавить в избранное">
                                    <svg class="icon icon-favorite"
                                            width="24"
                                            height="24">
                                        <use href="img/sprite.svg#favorite"></use>
                                    </svg>
                                </button>
                            </div>
                            <ul class="product__color-list">
                                <li class="product__color-item">
                                    <div class="color color_red color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_red"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose"></div>
                                </li>
                            </ul>
                        </footer>
                    </article>
                </li>

                <li class="products__item">
                    <article class="product">
                        <a class="product__link"
                            href="#">
                            <img class="product__img"
                                    src="img/product-02.jpg"
                                    alt="Бюстгальтер-Балконет Wien из Микрофибры">
                            <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
                        </a>

                        <footer class="product__footer">
                            <div class="product__price-favorite">
                                <p class="product__price">руб 2999</p>
                                <button class="btn product__favorite"
                                        aria-label="Добавить в избранное">
                                    <svg class="icon icon-favorite"
                                            width="24"
                                            height="24">
                                        <use href="img/sprite.svg#favorite"></use>
                                    </svg>
                                </button>
                            </div>
                            <ul class="product__color-list">
                                <li class="product__color-item">
                                    <div class="color color_red color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_red"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose"></div>
                                </li>
                            </ul>
                        </footer>
                    </article>
                </li>

                <li class="products__item">
                    <article class="product">
                        <a class="product__link"
                            href="#">
                            <img class="product__img"
                                    src="img/product-03.jpg"
                                    alt="Бюстгальтер-Балконет Wien из Микрофибры">
                            <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
                        </a>

                        <footer class="product__footer">
                            <div class="product__price-favorite">
                                <p class="product__price">руб 2999</p>
                                <button class="btn product__favorite"
                                        aria-label="Добавить в избранное">
                                    <svg class="icon icon-favorite"
                                            width="24"
                                            height="24">
                                        <use href="img/sprite.svg#favorite"></use>
                                    </svg>
                                </button>
                            </div>
                            <ul class="product__color-list">
                                <li class="product__color-item">
                                    <div class="color color_red color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_red"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose"></div>
                                </li>
                            </ul>
                        </footer>
                    </article>
                </li>

                <li class="products__item">
                    <article class="product">
                        <a class="product__link"
                            href="#">
                            <img class="product__img"
                                    src="img/product-04.jpg"
                                    alt="Бюстгальтер-Балконет Wien из Микрофибры">
                            <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
                        </a>

                        <footer class="product__footer">
                            <div class="product__price-favorite">
                                <p class="product__price">руб 2999</p>
                                <button class="btn product__favorite"
                                        aria-label="Добавить в избранное">
                                    <svg class="icon icon-favorite"
                                            width="24"
                                            height="24">
                                        <use href="img/sprite.svg#favorite"></use>
                                    </svg>
                                </button>
                            </div>
                            <ul class="product__color-list">
                                <li class="product__color-item">
                                    <div class="color color_red color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_red"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_black"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_white"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose color_checked"></div>
                                </li>
                                <li class="product__color-item">
                                    <div class="color color_brandy-rose"></div>
                                </li>
                            </ul>
                        </footer>
                    </article>
                </li>
            </ul>
        </div>
    `;
}
