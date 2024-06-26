export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('sqft must be a number');
    }
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
