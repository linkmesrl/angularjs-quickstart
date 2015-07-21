'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var options = {
    src: 'src/'
};

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: options.src
    }
  });
});

gulp.task('serve', function() {
  gulp.start(['browserSync']);
  gulp.watch(options.src + '**/*', browserSync.reload);
});

var Karma = require('karma').Server;

gulp.task('test', function (done) {
  new Karma({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function(){
    done();
  }).start();
});