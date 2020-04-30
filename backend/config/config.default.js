/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588038173325_1085';

  // add your middleware config here
  config.middleware = [];
  config.security = {
    csrf: false
  }
  config.cluster = {
    listen: {
      port: 3001
    }
  }
  config.mongoose = {
    client: {
      url: `mongodb://${process.env.DATEBASE_USER}:${process.env.DATEBASE_PWD}@db:27017/${process.env.DATEBASE_NAME}`,
      options: {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
      }
    }
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
