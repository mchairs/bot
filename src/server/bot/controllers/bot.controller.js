import botkit from 'botkit';
import store from '../services/store.service.js';

export default botkit.slackbot({
  storage: store
});
