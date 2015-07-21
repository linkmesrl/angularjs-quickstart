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

gulp.task('unit', function (done) {

  new Karma({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function(){
    done();
  }).start();
});

gulp.task('webdriver-update', $.protractor.webdriver_update);

function runProtractor (done) {

    var confFile = 'protractor.conf.js';

    gulp.src('spec/e2e/**/*.js')
    .pipe($.protractor.protractor({
        configFile: confFile
    }))
    .on('error', function (err) {
        // Make sure failed tests cause gulp to exit non-zero
        throw err;
    })
    .on('end', function () {
        // Close browser sync server
        browserSync.exit();
        done();
    });
}

gulp.task('e2e', ['serve', 'webdriver-update'], runProtractor);

gulp.task('test', ['unit', 'e2e']);
