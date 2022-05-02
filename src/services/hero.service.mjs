class HeroService {
  constructor({ heroRepository }) {
    this.heroRepository = heroRepository;
  }

  async findAll() {
    return await this.heroRepository.findAll();
  }

  async findById(id) {
    return await this.heroRepository.findById(id);
  }

  async create(hero) {
    return await this.heroRepository.create(hero);
  }
}

export default HeroService;
