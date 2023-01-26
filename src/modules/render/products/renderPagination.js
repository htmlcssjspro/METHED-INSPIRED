import { PAGINATION_COUNT } from '../../const';
import { router } from '../../router';
import createElement from '../../service/createElement';

const $pagination = createElement('div', {
    className: 'products__pagination pagination'
});

const $paginationList = createElement('ul', {
    className: 'pagination__list',
});

const $paginationListMax = createElement('ul', {
    className: 'pagination__list pagination__list_max',
});

const getPaginationPageUrl = (page) => {
    let { url } = router.getCurrentLocation();
    url = url.replace('#/', '');
    return `${url}?page=${page}`;
};

export default function renderPagination($parent, page, pages, totalCount) {
    console.log(`renderPagination($parent:${$parent}, page:${page}, pages:${pages}, totalCount:${totalCount})`);

    if (!pages || pages === 1){
        $pagination.remove();
        return;
    }

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
                href:        getPaginationPageUrl(i),
                textContent: i
            }, {
                cb(element) {
                    element.dataset.navigo = true;
                }
            })
        });
    }

    const $prev = createElement('li', {
        className: 'pagination__item',
    }, {
        append: createElement('a', {
            className: `link pagination__link pagination__arrow pagination__arrow_prev ${isFirst ? 'pagination__arrow_disabled' : ''}`,
            href:      getPaginationPageUrl(prev),
            tabIndex:  isFirst ? -1 : 0,
            ariaLabel: 'Предыдущая страница',
            innerHTML: `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 15.06L10.9096 12L14 8.94L13.0486 8L9 12L13.0486 16L14 15.06Z"/>
                    </svg>
                `,
        }, {
            cb(element) {
                element.dataset.navigo = true;
            }
        })
    });
    const $next = createElement('li', {
        className: 'pagination__item',
    }, {
        append: createElement('a', {
            className: `link pagination__link pagination__arrow pagination__arrow_next  ${isLast ? 'pagination__arrow_disabled' : ''}`,
            href:      getPaginationPageUrl(next),
            tabIndex:  isLast ? -1 : 0,
            ariaLabel: 'Следующая страница',
            innerHTML: `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 15.06L13.0904 12L10 8.94L10.9514 8L15 12L10.9514 16L10 15.06Z"/>
                    </svg>
                `,
        }, {
            cb(element) {
                element.dataset.navigo = true;
            }
        })
    });

    $paginationList.prepend($prev);
    $paginationList.append($next);

    $pagination.append($paginationList);
    $parent.append($pagination);
    router.updatePageLinks();


    // Max
    // {
    //     $paginationListMax.textContent = '';

    //     let count = PAGINATION_COUNT;
    //     const isNotStart = page - Math.floor(count / 2) > 1;
    //     const isEnd = page + Math.floor(count / 2) > pages;

    //     if (count > pages) {
    //         count = pages;
    //     }

    //     for (let i = 0; i < count; i++) {
    //         let n = i + 1;

    //         if (isNotStart) {
    //             if (isEnd) {
    //                 n = pages - count + i + 1;
    //             } else {
    //                 n = page - Math.floor(count / 2) + i;
    //             }
    //         }

    //         createElement('li', {
    //             className: 'pagination__item',
    //         }, {
    //             parent: $paginationListMax,
    //             append: createElement('a', {
    //                 className:   `link pagination__link ${page === n ? 'pagination__link_active' : ''}`,
    //                 href:        `${router.getCurrentLocation().url}?page=${n}`,
    //                 textContent: n
    //             })
    //         });
    //     }

    //     if (pages > count) {
    //         const $prev = createElement('li', {
    //             className: 'pagination__item',
    //         }, {
    //             append: createElement('a', {
    //                 className: `link pagination__link pagination__arrow pagination__arrow_prev ${isFirst ? 'pagination__arrow_disabled' : ''}`,
    //                 href:      getPaginationPageUrl(prev),
    //                 innerHTML: `
    //                     <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    //                         <path d="M14 15.06L10.9096 12L14 8.94L13.0486 8L9 12L13.0486 16L14 15.06Z"/>
    //                     </svg>
    //                 `,
    //                 ariaLabel: 'Предыдущая страница'
    //             })
    //         });
    //         const $next = createElement('li', {
    //             className: 'pagination__item',
    //         }, {
    //             append: createElement('a', {
    //                 className: `link pagination__link pagination__arrow pagination__arrow_next  ${isLast ? 'pagination__arrow_disabled' : ''}`,
    //                 href:      getPaginationPageUrl(next),
    //                 innerHTML: `
    //                     <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    //                         <path d="M10 15.06L13.0904 12L10 8.94L10.9514 8L15 12L10.9514 16L10 15.06Z"/>
    //                     </svg>
    //                 `,
    //                 ariaLabel: 'Следующая страница'
    //             })
    //         });

    //         $paginationListMax.prepend($prev);
    //         $paginationListMax.append($next);
    //     }

    //     $paginationListMax.prepend('Max version My edition');

    //     $parent.append($pagination);
    // }

}
