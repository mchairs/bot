'use strict';

export default class Player {
  constructor(id, chairs) {
    this.id = id;
    // Where are you going master?
    // 'For a drink' :D
    this.hasTheForce = true;
    this.chair = null;
  }

  moveToChair(chair) {
    if (this.seated()) {
      this.chair.vacate(this);
    }
    this.chair = chair;
  }

  seated() {
    return !!this.chair;
  }
};
