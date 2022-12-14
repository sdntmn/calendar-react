// Выводим служебные функции gulp
const gulp = require("gulp");
// Объявляем наши модули
const nodemon = require("gulp-nodemon");
const stylus = require("gulp-stylus");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const livereload = require("gulp-livereload");

gulp.task("styl", function () {
  return gulp
    .src("src/styles/stylus/*.styl")
    .pipe(sourcemaps.init({ presets: ["es2015", "react"], sourcemaps: true }))
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())

    .pipe(gulp.dest("src/styles/css/"))

    .pipe(livereload());
});

gulp.task("default", function () {
  livereload.listen();
  gulp.watch("src/styles/stylus/*.styl", gulp.series("styl"));
});

const nodemonOptions = {
  script: "src/index.js",
  ext: "js jsx",
  env: { NODE_ENV: "development" },
  verbose: false,
  ignore: [],

  watch: "src",
};

gulp.task("start", function () {
  nodemon(nodemonOptions).on("restart", function () {
    console.log("restarted!");
  });
});
