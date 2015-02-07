// Expose all Gulp plugins found
var $ = module.exports = require('gulp-load-plugins')();

//---

// Expose some other modules (local or not)
$.path            = require('path');
$.del             = require('del');
$.lazypipe        = require('lazypipe');
$.runSequence     = require('run-sequence');

//---

$.args = require('yargs').argv;

//---

$.is = {
  debug     : !!$.args.debug,
  get       : !!$.args.get,
  install   : !!$.args.install,
  idea      : !!$.args.idea,
  community : !!$.args.community
};

//---

$.pkg = require('../../../package.json');

$.userhome = require('../../lib/userhome');
$.oscheck = require('../../lib/oscheck');

$.config = require('../../config');

//---
// @begin: define output dir

(function() {
  var util = require('util');

  var ideVersion = (
    $.args.ideVersion || (
      ( $.is.idea || $.is.community ) ?
        $.config.version.idea :
        $.config.version.webstorm
    )
  );

  // console.log( 'ideVersion: ' + ideVersion );

  var ideDirName = $.config.dirname.webstorm;
  if( $.is.idea && !$.is.community ) {
    ideDirName = $.config.dirname.idea;
  } else if( $.is.community ) {
    ideDirName = $.config.dirname.ideacommunity;
  }

  // console.log( 'ideDirName: ' + ideDirName );

  var output = null;
  var template = null;
  if( $.oscheck.isWin ) {
    template = $.config.paths.dist.windows;
    output = util.format(
      template,
      $.userhome,
      ideDirName,
      ideVersion
    );
  } else if( $.oscheck.linux ) {
    template = $.config.paths.dist.linux;
    output = util.format(
      template,
      $.userhome,
      ideDirName,
      ideVersion
    );
  } else {
    template = $.config.paths.dist.mac;
    output = util.format(
      template,
      $.userhome,
      ideDirName,
      ideVersion
    );
  }

  // console.log( 'template: ' + template );
  // console.log( 'output: ' + output );
  template = null;

  var fs = require('fs');
  $.config.paths.outputDirExists = fs.existsSync( output );
  $.config.paths.outputDir = output;

})();

// @end: define output dir
//---

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
$.log = function(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
};

$.onError = function(err) {
  $.log(err);
};

//---

$.projectInfoMsg = function() {
  $.log('');
  $.log('project: ' + $.pkg.name + ' v' + $.pkg.version);
  $.log('description: ' + $.pkg.description);
  $.log('');
};

//---
