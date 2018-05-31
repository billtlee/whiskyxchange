var env = process.env.NODE_ENV || 'dev';

if (env ==='dev' || env === 'test' || env ==='ganage' || env ==='rinkby'){
  var config = require('./config.json');
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key]
  });
}
