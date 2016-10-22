var gulp = require('gulp');
var rollup = require('rollup-stream');
var source = require('vinyl-source-stream');

gulp.task('rollup', function () {
  return rollup({
      entry: './app/main.js',
    })
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public'));
});
