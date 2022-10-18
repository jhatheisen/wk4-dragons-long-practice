class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  // define instance method
  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...instances) {
    let names = [];
    for (let instance of instances) {
      names.push(instance.name);
    }
    return names;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
