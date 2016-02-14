'use strict';

module.exports = class Chair {
    constructor(index) {
        this.formerTentants = {};
        this.player = null;
        this.index = index;
    }

    isOccupied() {
        return !!this.player;
    }

    sitPlayer(player) {
        this.player = player;
        this.formerTentants[player.id] = player;
    }

    hasSat(player) {
        return !!this.formerTentants[player.id];
    }

    vacate() {
        this.player = null;
    }
};
