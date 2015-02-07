module.exports = function(gulp, $) {

  gulp.task('run:flow', function(done) {

  if( $.config.paths.outputDirExists ) {

      var runTasks = ['jshint'];

      if( $.is.get ) {
        runTasks = runTasks.concat([ 'copy:from:ide' ]);
      } else if( $.is.install ) {
        runTasks = runTasks.concat([ 'copy:to:ide' ]);
      } else {
        $.helpMsg();
      }

      runTasks = runTasks.concat([ done ]);
      $.runSequence.apply(null, runTasks);

    } else {

      var msg = 'not fount: ' + $.config.paths.outputDir + '';
      $.util.log($.util.colors.red(msg));
    }

  });

  //---

  gulp.task('default', ['run:flow'], function() {

    $.projectInfoMsg();

  });

};
