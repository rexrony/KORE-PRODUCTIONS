var gulp = require('gulp'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  htmlmin = require('gulp-htmlmin'),
  cleanCSS = require('gulp-clean-css'),
  rename = require("gulp-rename"),
  uglify = require('gulp-uglify'),
  pump = require("pump"),
  concat = require('gulp-concat'),
  browserSync = require('browser-sync').create();

  // image processing
  gulp.task('img', () => { 
      gulp.src('./images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./minified/images'))
  });
// Images Optimaztion imageop = require('gulp-image-optimization'),

// HTML Compression
gulp.task('minifyhtml', () => {
    return gulp.src('./homepage.html')
      .pipe(htmlmin({ cssmin: true, collapseWhitespace:true, jsmin: true }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./'));
  });

//CSS
  gulp.task('minify-css', () => {
    return gulp.src('css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./minified/css'));
  });
/*
  gulp.task('serve', ['minifyhtml'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
  
});*/


gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('./minified/js')
    ],
    cb
  );
});

gulp.task('scripts', function() {
return gulp.src('./minified/js/*.js', ['!./minified/js/masonry.js'])
 /* return gulp.src('js/*.js')*/
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./minified/js'));
});