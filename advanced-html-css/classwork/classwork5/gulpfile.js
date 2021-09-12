const gulp = require('gulp');
const createGulpSass = require('gulp-sass');
const sassEngine = require('sass');
const sass = createGulpSass(sassEngine);
const browserSync = require('browser-sync').create();

const buildSass = function() {
  return gulp.src("src/**/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("./dist"))
      .pipe(browserSync.stream());
}

const copyHtml = function () {
  return gulp.src("src/**/*.html")
    .pipe(gulp.dest("./dist"))
}

gulp.task('serve', function() {
  browserSync.init({
      server: "./dist"
  });

  gulp.watch("src/**/*.scss", buildSass);
  gulp.watch("./src/*.html").on('change', browserSync.reload);
  gulp.watch("./src/*.html", copyHtml);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', buildSass);