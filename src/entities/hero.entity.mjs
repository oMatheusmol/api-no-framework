class Hero {
  constructor(id, race, name, age) {
    this.id = id;
    this.race = race;
    this.name = name;
    this.age = age;
  }

  isValid() {
    const propertyNames = Object.getOwnPropertyNames(this);
    const amountInvalid = propertyNames
      .map((property) => (!!this[property] ? null : `${property} is missing!`))
      .filter((message) => !!message);
    return { 
        isValid: amountInvalid.length === 0,
        error: amountInvalid 
    };
  }
}

export default Hero;
