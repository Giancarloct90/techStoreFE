const content = document.getElementById('content');
const loadDiv = document.getElementById('loadDiv');


import {
    components
} from '../controllers/index.crtlr';

export const routes = async (route) => {
    content.innerHTML = '';
    switch (route) {
        case '':
            loadDiv.style.opacity = '0';
            content.appendChild(await components.home());
            break;
        case '#/':
            loadDiv.style.opacity = '0';
            content.appendChild(await components.home());
            break;
        case '#/Tienda':
            loadDiv.style.opacity = '1';
            content.appendChild(await components.store());
            break;
        case '#/admin':
            loadDiv.style.opacity = '0';
            content.appendChild(await components.newProducts());
            break;
        default:
            loadDiv.style.opacity = '0';
            content.appendChild(await components.notFound());
            break;
    }
}