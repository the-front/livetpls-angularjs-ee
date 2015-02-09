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
    docs: 'docs',
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

  config.templatesNamePattern = 'ng_ee_';
  config.templatesNamePatternFiles = config.templatesNamePattern + '*.xml';

  //---

  function livetplFilePath( filename ) {
    return path.join(
      config.rootPath,
      config.paths.src,
      config.templatesNamePattern +
      filename +
      '.xml'
    );
  }

  function livetplsDocsOutput() {
    return path.join(
      config.rootPath,
      config.paths.docs,
      'live_templates.md'
    );
  }

    //---

  config.livetpls2md = {
    title: 'livetpls-angularjs-ee : Live Templates',
    outputFile: livetplsDocsOutput(),
    templates: [
      {
        file: livetplFilePath('javascript'),
        lang: 'javascript',
        tplGroupName: 'JavaScript'
      },
      {
        file: livetplFilePath('requirejs'),
        lang: 'javascript',
        tplGroupName: 'Require.js'
      },
      {
        file: livetplFilePath('global'),
        lang: 'javascript',
        tplGroupName: 'Angular.js Enterprise Edition'
      },
      {
        file: livetplFilePath('angularjs'),
        lang: 'javascript',
        tplGroupName: 'Angular.js'
      },
      {
        file: livetplFilePath('angularjs_resource'),
        lang: 'javascript',
        tplGroupName: 'Angular.js ngResource'
      },
      {
        file: livetplFilePath('angularjs_route'),
        lang: 'javascript',
        tplGroupName: 'Angular.js ngRoute'
      },
      {
        file: livetplFilePath('ui_router'),
        lang: 'javascript',
        tplGroupName: 'Angular UI Router'
      },
      {
        file: livetplFilePath('jasmine'),
        lang: 'javascript',
        tplGroupName: 'Jasmine'
      }
    ]
  };

  //---

  return config;

})();
