import { Router } from 'express';
import urlShortner from '../service/urlShortner.js';
import {generateShortId,validateUrl} from '../midleware/url.js' 
const routes = Router();

routes.post('/shorten',validateUrl,generateShortId,urlShortner.urlShortner);
routes.get('/:shortId', urlShortner.shortUrl);

export default routes;
