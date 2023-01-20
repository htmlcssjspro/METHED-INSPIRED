import { PAGINATION_COUNT } from '../const';
import { router } from '../router';
import createElement from '../service/create-element';

const $pagination = createElement('div', {
    className: 'products__pagination pagination'
});

const $paginationList = createElement('ul', {
    className: 'pagination__list',
}, {
    parent: $pagination,
});

const $paginationListMax = createElement('ul', {
    className: 'pagination__list',
}, {
    parent: $pagination,
});

export default function renderPagination($parent, page, pages, totalCount) {
    const url = router.getCurrentLocation().url;

    const isFirst = page === 1;
    const isLast = page === pages;

    const prev = isFirst ? page : page - 1;
    const next = isLast ? pages : page + 1;

    $paginationList.textContent = '';

    for (let i = 1; i <= pages; i++) {
        createElement('li', {
            className: 'pagination__item',
        }, {
            parent: $paginationList,
            append: createElement('a', {
                className:   `link pagination__link ${page === i ? 'pagination__link_active' : ''}`,
                href:        `${url}?page=${i}`,
                textContent: i
            })
        });
    }

    const $prev = createElement('li', {
        className: 'pagination__item',
    }, {
        append: createElement('a', {
            className: `link pagination__link pagination__arrow pagination__arrow_prev ${isFirst ? 'pagination__arrow_disabled' : ''}`,
            href:      `${url}?page=${prev}`,
            innerHTML: `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 15.06L10.9096 12L14 8.94L13.0486 8L9 12L13.0486 16L14 15.06Z"/>
                    </svg>
                `,
            ariaLabel: 'Предыдущая страница'
        })
    });
    const $next = createElement('li', {
        className: 'pagination__item',
    }, {
        append: createElement('a', {
            className: `link pagination__link pagination__arrow pagination__arrow_next  ${isLast ? 'pagination__arrow_disabled' : ''}`,
            href:      `${url}?page=${next}`,
            innerHTML: `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 15.06L13.0904 12L10 8.94L10.9514 8L15 12L10.9514 16L10 15.06Z"/>
                    </svg>
                `,
            ariaLabel: 'Следующая страница'
        })
    });

    $paginationList.prepend($prev);
    $paginationList.append($next);
    $parent.append($pagination);


    // Max
    {
        $paginationListMax.textContent = '';

        let count = PAGINATION_COUNT;
        const isNotStart = page - Math.floor(count / 2) > 1;
        const isEnd = page + Math.floor(count / 2) > pages;

        if (count > pages) {
            count = pages;
        }

        for (let i = 0; i < count; i++) {
            let n = i + 1;

            if (isNotStart) {
                if (isEnd) {
                    n = pages - count + i + 1;
                } else {
                    n = page - Math.floor(count / 2) + i;
                }
            }

            createElement('li', {
                className: 'pagination__item',
            }, {
                parent: $paginationListMax,
                append: createElement('a', {
                    className:   `link pagination__link ${page === n ? 'pagination__link_active' : ''}`,
                    href:        `${router.getCurrentLocation().url}?page=${n}`,
                    textContent: n
                })
            });
        }

        if (pages > count) {
            const $prev = createElement('li', {
                className: 'pagination__item',
            }, {
                append: createElement('a', {
                    className: `link pagination__link pagination__arrow pagination__arrow_prev ${isFirst ? 'pagination__arrow_disabled' : ''}`,
                    href:      `${url}?page=${prev}`,
                    innerHTML: `
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 15.06L10.9096 12L14 8.94L13.0486 8L9 12L13.0486 16L14 15.06Z"/>
                        </svg>
                    `,
                    ariaLabel: 'Предыдущая страница'
                })
            });
            const $next = createElement('li', {
                className: 'pagination__item',
            }, {
                append: createElement('a', {
                    className: `link pagination__link pagination__arrow pagination__arrow_next  ${isLast ? 'pagination__arrow_disabled' : ''}`,
                    href:      `${url}?page=${next}`,
                    innerHTML: `
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 15.06L13.0904 12L10 8.94L10.9514 8L15 12L10.9514 16L10 15.06Z"/>
                        </svg>
                    `,
                    ariaLabel: 'Следующая страница'
                })
            });

            $paginationListMax.prepend($prev);
            $paginationListMax.append($next);
        }

        $paginationListMax.prepend('Max version My edition');

        $parent.append($pagination);
    }

}
