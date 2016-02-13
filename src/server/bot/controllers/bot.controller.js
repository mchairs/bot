import botkit from 'botkit';
import store from './store.controller.js';

export default botkit.slackbot({
  storage: store
});
