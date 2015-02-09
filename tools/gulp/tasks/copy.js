module.exports = function(gulp, $) {

  gulp.task('copy:from:ide', function() {

    var destPath = ( $.is.debug ? $.config.paths.build : $.config.paths.src );

    $.log( 'copy templates from: ' + $.config.paths.outputDir );

    return gulp
      .src(
        $.path.join(
          $.config.paths.outputDir,
          $.config.templatesNamePatternFiles
        )
      )
      .pipe( $.if( $.is.debug, $.debug() ) )
      .pipe( gulp.dest( destPath ) );

  });

  gulp.task('copy:to:ide', function() {

    var destPath = ( $.is.debug ? $.config.paths.build : $.config.paths.outputDir );

    $.log( 'copy templates to: ' + destPath );

    return gulp
      .src(
        $.path.join(
          $.config.paths.src,
          $.config.templatesNamePatternFiles
        )
      )
      .pipe( $.if( $.is.debug, $.debug() ) )
      .pipe( gulp.dest( destPath ) );

  });

};
