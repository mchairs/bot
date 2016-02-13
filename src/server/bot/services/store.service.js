import channel from './channel.service.js';
import team from './team.service.js';
import user from './user.service.js';

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
