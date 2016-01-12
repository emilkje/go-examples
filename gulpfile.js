var shell = require("gulp-shell");
var path = require("path");
var gulp = require("gulp");

var filePaths = path.join("**/*.go");

gulp.task("compile", function(){
  return gulp.src(filePaths, {read: false})
    .pipe(shell(['go install <%= stripPath(file.path) %>'],
      {
        templateData: {
          stripPath: function(file) {
            var basePath = process.env["GOPATH"];
            return file.replace(basePath+path.sep, '').split(path.sep).slice(1,-1).join(path.sep);
          }
        }
      }));
});

gulp.task('watch', function() {
  gulp.watch(filePaths, ['compile'])
})
