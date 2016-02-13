import channel from './channel.controller.js';
import team from './team.controller.js';
import user from './user.controller.js';

export default {
  teams: {
    get: team.get,
    save: team.save,
    all: team.all
  },
  users: {
    get: user.get,
    save: user.save,
    all: user.all
  },
  channels: {
    get: channel.get,
    save: channel.save,
    all: channel.all
  }
};
