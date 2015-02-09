module.exports = function(gulp, $) {

  gulp.task('livetpls2md', function(done) {

    var livetpls2md = require('../../lib/livetpls2md');

    livetpls2md( $.config.livetpls2md )
      .fail( function( error ) {
        $.log( error );
      })
      .done( done );

  });

};
