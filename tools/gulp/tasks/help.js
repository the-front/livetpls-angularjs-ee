module.exports = function(gulp, $) {

  gulp.task('list:tasks', $.taskListing);

  gulp.task('help', ['list:tasks'], function() {

    $.helpMsg();

  });

};
