"use strict";var gulp=require("gulp"),babel=require("gulp-babel"),uglify=require("gulp-uglify"),sourcemaps=require("gulp-sourcemaps"),converter=function(){return gulp.src("*.js").pipe(sourcemaps.init()).pipe(babel({presets:["@babel/env"]})).pipe(uglify()).pipe(sourcemaps.write(".")).pipe(gulp.dest("dist"))};gulp.task("watch",function(){gulp.watch("*.js",converter)});
//# sourceMappingURL=gulpfile.js.map