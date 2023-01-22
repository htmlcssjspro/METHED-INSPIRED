import { DATA } from './const';
import createElement from './service/createElement';

export default function createCssColors() {
    const style = createElement('style');
    DATA.colors.forEach(color => {
        style.textContent += `
            .color_${color.title}{
                background-color: ${color.code};
                ${color.title === 'white' || color.title === 'beige' ? 'border: .4px solid #8A8A8A;' : ''}
            }
        `;
    });

    document.head.append(style);
}
