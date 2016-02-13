'use strict';

export default {
  ok: () => process.env.CLIENT_ID && process.env.CLIENT_SECRET && process.env.PORT
};
