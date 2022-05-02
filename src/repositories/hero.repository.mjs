import { readFile, writeFile } from 'fs/promises';

class HeroRepository {
  constructor({ file }) {
    this.file = file;
  }

  async _currentFileContent() {
    return JSON.parse(await readFile(this.file, 'utf8'));
  }

  async findAll() {
    return this._currentFileContent();
  }

  async findById(id) {
    const all = await this._currentFileContent();
    return all.find((hero) => hero.id === id);
  }

  async create(hero) {
    const currentFile = await this._currentFileContent();
    currentFile.push(hero);
    await writeFile(this.file, JSON.stringify(currentFile));
    return { id: hero.id };
  }
}

export default HeroRepository;
