CleverStack LinkedIn Authentication Module
====================
[![NPM version](https://badge.fury.io/js/clever-auth-linkedin.png)](http://badge.fury.io/js/clever-auth-linkedin) [![GitHub version](https://badge.fury.io/gh/cleverstack%2Fclever-auth-linkedin.png)](http://badge.fury.io/gh/cleverstack%2Fclever-auth-linkedin) [![Dependency Status](https://david-dm.org/CleverStack/clever-auth-linkedin.png)](https://david-dm.org/CleverStack/clever-auth-linkedin) [![devDependency Status](https://david-dm.org/CleverStack/clever-auth-linkedin/dev-status.png)](https://david-dm.org/CleverStack/clever-auth-linkedin#info=devDependencies) [![Code Climate](https://codeclimate.com/github/CleverStack/clever-auth-linkedin.png)](https://codeclimate.com/github/CleverStack/clever-auth-linkedin) [![Build Status](https://secure.travis-ci.org/CleverStack/clever-auth-linkedin.png?branch=master)](https://travis-ci.org/CleverStack/clever-auth-linkedin) [![Coverage](https://codeclimate.com/github/CleverStack/clever-auth-linkedin/coverage.png)](https://codeclimate.com/github/CleverStack/clever-auth-linkedin) [![NPM downloads](http://img.shields.io/npm/dm/clever-auth-linkedin.png)](https://www.npmjs.org/package/clever-auth-linkedin) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)  [![Join the chat at https://gitter.im/CleverStack/cleverstack-cli](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/CleverStack/cleverstack-cli?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

![CleverStack NodeJS Authentication Module](http://cleverstack.github.io/assets/img/logos/node-seed-logo-clean.png "CleverStack NodeJS Authentication Module")
<blockquote>
This CleverStack Module provides LinkedIn Authentication for the clever-auth module.
</blockquote>

## Highlights
* Works with both the `clever-orm` and the `clever-odm` modules.
* Easy to use configuration prompts, `grunt prompt:cleverAuthLinkedInConfig`.
* Easily installed using the CleverStack CLI, `clever install clever-auth-linkedin`.
* Use with the `clever-users` module - OR - with any other module that exports the `UserController`, `UserService` and `UserModel` resources/classes.
* Other Authentication Strategies: Github, LinkedIn, Facebook, Twitter and Dropbox - as well as local authentication out of the box.


## Prerequisites
  1. You must be using [cleverstack-cli](https://github.com/CleverStack/cleverstack-cli) version [1.2.2](https://github.com/CleverStack/cleverstack-cli/releases/tag/1.2.2) or newer.
  2. Your project must be using [node-seed](https://github.com/CleverStack/node-seed) version [1.2.1](https://github.com/CleverStack/node-seed/releases/tag/1.2.1) or newer.
  3. You must either install the [clever-users](https://github.com/CleverStack/clever-users) module, or any other module that provides the `UserController`, `UserService` and `UserModel` resources/classes.
  4. You must have [clever-auth](https://github.com/CleverStack/clever-auth) version [1.2.3](https://github.com/CleverStack/clever-auth/releases/tag/1.2.3) or newer.


## Installation

### Using CLI
1. Run `clever install clever-auth-linkedin` and follow the prompts
2. Run `clever serve` to start your application.

### Without CLI
1. Clone this repo (or untar it there) into your modules folder (ie `modules/clever-auth-linkedin`)
3. Run `grunt prompt:cleverAuthLinkedInConfig` and fill in your configuration options.
5. Run `grunt db` to rebase and seed the data.
6. Run `grunt server` to start your application.



## Configuration

### Files
For more information about how modules (including clever-auth-linkedin) are configured, please see the [cleverstack.io](http://cleverstack.io/documentation/backend) Documentation sections, [Backend Configuration](http://localhost:9001/documentation/backend/#configuration) and [Module Configuration](http://localhost:9001/documentation/backend/modules/#configuration) for more information.

### Grunt prompts
1. `grunt prompt:cleverAuthLinkedInConfig` can be used to generate your config for any environment you want.

### Options

#### `clientID` - your linkedin oauth2 client id.
```
{
  "clever-auth-linkedin": {
    "clientID"     : "77dnae99wih7t1"
  }
}
```

#### `clientSecret` - your linkedin oauth2 client secret.
```
{
  "clever-auth-linkedin": {
    "clientSecret" : "Llr2J8zlPnrYWNSn"
  }
}
```

#### `callbackURL` - the callback (return) url linkedin will return you to.
```
{
  "clever-auth-linkedin": {
    "callbackURL"  : "http://localhost:8080/auth/linkedin/return",
  }
}
```
#### `scope` - the callback (return) url linkedin with return you to.
```
{
  "clever-auth-linkedin": {
    "scope"        : ["r_emailaddress", "r_basicprofile"],
  }
}
```


## Documentation

See [cleverstack.io](http://cleverstack.io/documentation/#backend) for more detailed information on the Node Seed or visit the [Getting Started Guide](http://cleverstack.io/getting-started/) if you have never used CleverStack before.

## License

See our [LICENSE](https://github.com/CleverStack/clever-auth-linkedin/blob/master/LICENSE)
