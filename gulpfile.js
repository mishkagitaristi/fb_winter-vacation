var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

sass.compiler = require('node-sass');

gulp.task('connect', function(){
  connect.server({
    port: 1996,
    root:'app',
    livereload: true
  })
})

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./app/assets/css'))
      .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(gulp.dest('./app'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./app/*.html', ['html']);
});

gulp.task('default' , ['connect', 'sass', 'html', 'watch']);