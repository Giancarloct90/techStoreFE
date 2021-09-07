import './styles/style.css';
import {
    routes
} from './routes/routes';
import './index';


// WHEN THE HASH CHANGE HE CALL A FUNCTION
routes(window.location.hash);
window.addEventListener('hashchange', async () => {
    routes(window.location.hash);
});