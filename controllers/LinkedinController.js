var Strategy   = require('passport-linkedin-oauth2').Strategy;

module.exports = function(Controller, AuthController, UserService, Exceptions, config, injector, passport, underscore) {
  var state    = +new Date() + ''
    , qs       = require('qs');

  return Controller.extend({
    route          : '[GET,POST] /auth/linkedIn/:action/?',
    restfulRouting : false,

    setup: function() {
      injector.instance('LinkedInStrategy', Strategy);
      passport.use(new Strategy(underscore.extend({state: state}, config['clever-auth-linkedin']), this.callback('linkedinLogin')));

      return this._super.apply(this, arguments);
    },

    linkedinLogin: function(accessToken, refreshToken, profile, done) {
      UserService.findOrCreate({
        linkedinId  : profile._json.id,
        email       : profile._json.emailAddress,
        lastName    : profile._json.lastName,
        firstName   : profile._json.firstName,
        // link        : profile._json.publicProfileUrl,
        // picture     : profile._json.pictureUrl || null,
        // locale      : !!profile._json.location && typeof profile._json.location === 'object' ? profile._json.location.name : null,
        // token       : accessToken || null
      })
      .then(done)
      .catch(function(error) {
        done(new Exceptions.AuthenticationError('Unable to authenticate linkedin user due to: ' + error));
      });
    }
  },
  {
    signInAction: function () {
      var params = {
        state           : state,
        scope           : config['clever-auth-linkedin'].scope,
        'client_id'     : config['clever-auth-linkedin'].AppKey,
        'redirect_uri'  : config['clever-auth-linkedin'].redirectURIs,
        'response_type' : 'code',
      };

      this.send({url: 'https://www.linkedin.com/uas/oauth2/authorization?' + qs.stringify(params)}, 200);
    },

    returnAction: function () {
      passport.authenticate('linkedin', this.proxy(AuthController.authenticate, null))(this.req, this.res, this.next);
    }
  });
};
