module.exports = function() {
  var gulp = require('gulp')

  return gulp.src( ['tests/**/*', '!tests/index.js'] )
    .pipe( gulp.dest('dist/') )
}
