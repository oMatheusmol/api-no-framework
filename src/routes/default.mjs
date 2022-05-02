import Hero from '../entities/hero.entity.mjs';
import { generateInstance } from '../factories/hero.factory.mjs';
const heroService = generateInstance();
const DEFAULT_HEADER = { 'Content-Type': 'application/json' };

export const routes = {
  'heroes:GET': async (request, response) => {
    try {
      console.time('findAll');
      const { id } = request.queryString;
      if (id) response.write(JSON.stringify(await heroService.findById(id)));
      if (!id) response.write(JSON.stringify(await heroService.findAll()));
      console.timeEnd('findAll');
      return response.end();
    } catch (error) {
      handlerError(response)(error);
    }
  },
  'heroes:POST': async (request, response) => {
    try {
      const { body } = request;
      const { isValid, error } = new Hero(body).isValid();
      if (!isValid) return response.write(JSON.stringify(error)).end();
      const { id } = await heroService.create(body);
      return response.write(JSON.stringify(id)).end();
    } catch (error) {
      handlerError(response)(error);
    }
  },
  default: (request, response) => {
    response.writeHead(404, DEFAULT_HEADER);
    return response.end('404');
  },
};
