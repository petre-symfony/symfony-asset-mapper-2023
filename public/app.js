class MixedVinyl {
  constructor(title, year) {
    this.title = title;
    this.year = year;
  }

  describe() {
    return `${this.title} was released in ${this.year}`;
  }
}

const mix = new MixedVinyl('Awesome Mix Vol. 1', 2014);
console.log(mix.describe());