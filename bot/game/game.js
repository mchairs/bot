
'use strict';

import Player from './player.js';
import Chair from './chair.js';

export default class Game {
  constructor(players, done) {
    this.fnDone = done;
    this.numChairs = players.length - 1;
    this.players = {};
    this.chairs = {};

    players.forEach(playerID => {
      let p = new Player(playerID, this.chairs);
      this.players[p.id] = p;
    });

    for (let i = 0; i < players.length - 1; i++) {
      this.chairs[i] = new Chair(i);
    }
  }

  tryToSit(playerID, chairIndex) {
    if (this.canSit(playerID, chairIndex)) {
      this.sit(this.players[playerID], this.chairs[chairIndex]);
      this.checkDone();
      return true;
    }

    return false;
  }

  checkDone() {
    if (this.isGameOver()) {
      this.done(this.chairs, this.players);
    }
  }

  isGameOver() {
    return false;
  }

  canSit(playerID, chairIndex) {
    let c = this.chairs[chairIndex];
    return this.isValidChair(chairIndex) &&
      this.isValidPlayer(playerID) &&
      !c.isOccupied() &&
      !c.hasSat(this.players[playerID]);
  }

  isValidChair(chairIndex) {
    return !!this.chairs[chairIndex];
  }

  isValidPlayer(playerID) {
    return !!this.players[playerID];
  }

  sit(player, chair) {
    player.moveToChair(chair);
    chair.sitPlayer(player);
  }

  useTheForce(playerID, chairIndex) {
    if (this.canForce(playerID, chairIndex)) {
      let p = this.players[playerID];
      this.sit(p, this.chairs[chairIndex]);
      p.hasTheForce = false;
      return true;
    }

    return false;
  }

  canForce(playerID, chairIndex) {
    let p = this.players[playerID];
    return this.isValidPlayer(playerID) &&
     this.isValidChair(chairIndex) &&
     p.hasTheForce &&
     !this.chairs[chairIndex].hasSat(p);
  }

};
