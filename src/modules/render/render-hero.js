export default function renderHero(gender = 'women') {
    const $hero = document.querySelector('.hero');

    $hero.innerHTML = `
        <div class="container">
            <div class="hero__content">
                <h2 class="hero__title">
                    <span>Новая коллекция</span>
                    <br>
                    <span>Бюстгальтер-балконет</span>
                </h2>
                <a class="link hero__link"
                    href="#">Перейти</a>
            </div>
        </div>
    `;
}
