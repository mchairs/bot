var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');

gulp.task('default', function() {
  nodemon({
    script: 'server.js',
    ext: 'js html',
    env: {
      'NODE_ENV': 'development'
    }
  });
});

gulp.task('test', function() {
  return gulp.src(['tests/**.js'], {
    read: false
  }).pipe(mocha({
    reporter: 'nyan'
  }));
});
