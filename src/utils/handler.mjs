import { handlerError } from '../utils/handler.error.mjs';
import { routes } from '../routes/default.mjs';

export const handler = (request, response) => {
    const { method, url } = request;
    const [, route, id] = url.split('/');
    request.queryString = { id: isNaN(id) ? id : parseInt(id) };
  
    const key = `${route}:${method}`;
    const chosen = routes[key] || routes.default;
    return chosen(request, response).catch(handlerError(response));
  };