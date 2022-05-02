import HeroService from '../services/hero.service.mjs';
import HeroRepository from '../repositories/hero.repository.mjs';
import { join, resolve } from 'path';

export const generateInstance = () => {
  const heroRepository = new HeroRepository({ file: join(resolve(), 'db', 'data.json') });
  const heroService = new HeroService({ heroRepository });
  return heroService;
};

