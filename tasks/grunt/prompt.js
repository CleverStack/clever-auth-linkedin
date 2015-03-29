var fs            = require('fs')
  , path          = require('path')
  , underscore    = require('underscore')
  , defaultConfig = require(path.join(__dirname, '..', '..', 'config', 'default.json'))
  , configFile    = null
  , config        = {};

module.exports    = {
  config: {
    authLinkedinConfigPrompt: {
      options: {
        questions: [
          {
            type    : 'list',
            config  : 'authLinkedinConfig.environment',
            message : 'What environment is this configuration for?',
            choices : [
              { name: 'LOCAL' },
              { name: 'TEST' },
              { name: 'DEV' },
              { name: 'STAG' },
              { name: 'PROD' }
            ],
            default : process.env.NODE_ENV ? process.env.NODE_ENV.toUpperCase() : 'LOCAL',
            filter  : function(env) {
              underscore.extend(config, defaultConfig);

              configFile = path.resolve(path.join(process.cwd(), 'config', env.toLowerCase() + '.json'));

              if (fs.existsSync(configFile)) {
                underscore.extend(config, require(configFile));
                
                Object.keys(defaultConfig['clever-auth-linkedin']).forEach(function(key) {
                  if (typeof config['clever-auth-linkedin'][key] === 'undefined') {
                    config['clever-auth-linkedin'][key] = defaultConfig['clever-auth-linkedin'][key];
                  }
                });
              }

              return true;
            }
          },
          {
            type    : 'input',
            config  : 'authLinkedinConfig.clientID',
            message : 'Github clientID',
            default : function() {
              return config['clever-auth-linkedin'].clientID || '';
            }
          },
          {
            type    : 'input',
            config  : 'authLinkedinConfig.clientSecret',
            message : 'Github clientSecret',
            default : function() {
              return config['clever-auth-linkedin'].clientSecret || '';
            }
          },
          {
            type    : 'input',
            config  : 'authLinkedinConfig.callbackURL',
            message : 'Github callbackURL',
            default : function() {
              return config['clever-auth-linkedin'].callbackURL || 'http://localhost:8080/auth/linkedin/return';
            }
          },
          {
            type    : 'list',
            config  : 'authLinkedinConfig.scope',
            message : 'Github scope',
            choices : [
              { name: 'r_emailaddress' },
              { name: 'r_basicprofile' }
            ],
            default : function() {
              return config['clever-auth-linkedin'].scope || ['r_emailaddress', 'r_basicprofile'];
            }
          }
        ]
      }
    }
  },
  register: function(grunt) {
    grunt.loadNpmTasks('grunt-prompt');
    
    grunt.registerTask('prompt:cleverAuthLinkedinConfig', ['prompt:authLinkedinConfigPrompt', 'createCleverAuthLinkedinConfig']);
    grunt.registerTask('createCleverAuthLinkedinConfig', 'Adds the config for cleverAuth to the designated environment', function createCleverAuthLinkedinConfig() {
      var conf = grunt.config('authLinkedinConfig');

      delete conf.environment;

      config['clever-auth-linkedin'] = underscore.extend(config['clever-auth-linkedin'], conf);

      if (config['clever-auth-linkedin'].store !== 'redis') {
        delete config['clever-auth-linkedin'].redis;
      }

      if (config['clever-auth-linkedin'].store !== 'memcache') {
        delete config['clever-auth-linkedin'].memcache;
      }

      fs.writeFileSync(configFile, JSON.stringify(config, null, '  '));
    });
  }
};
