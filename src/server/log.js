import winston from 'winston';
import moment from 'moment';

export default new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: () => `[${moment().format('MMMM Do YYYY, h:mm:ss a')}]`,
      colorize: true
    })
  ]
});
