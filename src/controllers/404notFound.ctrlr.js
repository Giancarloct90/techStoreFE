import view from '../views/404notFound.html';

export const notFound = async () => {
    let div = document.createElement('div');
    div.innerHTML = view;
    return div;
}