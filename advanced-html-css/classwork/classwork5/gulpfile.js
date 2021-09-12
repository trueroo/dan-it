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

gulp.task('serve', function() {
  browserSync.init({
      server: "./"
  });

  gulp.watch("src/**/*.scss", buildSass);
  gulp.watch("index.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', buildSass);