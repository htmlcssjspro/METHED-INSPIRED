import { DATA } from './const';
import createElement from './service/create-element';

export default function createCssColors() {
    let style = createElement('style');
    DATA.colors.forEach(color => {
        style.textContent += `
            .color_${color.title}{
                background-color: ${color.code};
                ${color.title === 'white' ? 'border: .4px solid #8A8A8A' : ''}
            }
        `;
    });

    document.head.append(style);
}
