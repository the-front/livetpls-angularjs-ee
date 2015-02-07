module.exports = (function() {

  var path = require('path');
  var pkg = require('../package');

  //---

  var config = {};

  //---

  config.root = './';
  config.rootPath = path.resolve(__dirname, '../');

  //---

  config.packages = [
    './package.json'
  ];

  //---
  var bannerTitle = pkg.title || pkg.name;

  config.banner =
    '/*!\n' +
    ' * ' + bannerTitle + '\n' +
    ' * ' + pkg.description + '\n' +
    ' * @license ' + pkg.license + '\n' +
    ' * v' + pkg.version + '\n' +
    ' */\n';

  //---

  config.js = {
    tools: [
      'gulpfile.js',
      'tools/**/*.js'
    ]
  };

  //---

  config.version = {
    webstorm: 9,
    idea: 14
  };

  //---

  config.dirname = {
    webstorm: 'WebStorm',
    idea: 'IntelliJIdea',
    ideacommunity: 'IdeaIC'
  };

  //--

  config.paths = {
    build: '.temp',
    src: 'templates',
    dist: {
      // <userhome>\.<ide><version>\config\templates
      windows: '%s\\.%s%s\\config\\templates',

      // <userhome>/.<ide><version>/config/templates
      linux: '%s/.%s%s/config/templates',

      // <userhome>/Library/Preferences/<ide><version>/templates
      mac: '%s/Library/Preferences/%s%s/templates'
    }
  };

  //---

  config.templatesNamePattern = 'ng_ee_*.xml';

  //---

  return config;

})();
