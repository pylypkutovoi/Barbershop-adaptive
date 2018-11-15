  var gulp = require("gulp");
  var sass = require("gulp-sass");
  var server = require("browser-sync").create();

  gulp.task("sass", function(){
    return gulp.src("source/sass/style.scss")
      .pipe(sass())
      .pipe(gulp.dest("source/css"));
  });

  gulp.task("server", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("sass"));
  gulp.watch("source/*.html").on("change", server.reload);
});

