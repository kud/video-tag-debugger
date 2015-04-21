module.exports = function() {
  var gulp  = require('gulp')

  var browserified = require('through2')({
      objectMode: true
    },
    function( chunk, enc, cb ) {
      if( chunk.isBuffer() ) {

        var b = require('browserify')({
          entries: chunk.path
        })

        chunk.contents = b.bundle()
        this.push( chunk )
      }

    cb()
  })

  return gulp.src( ['./tests/index.js'] )
    .pipe( require('gulp-plumber')() )
    .pipe( browserified )
    .pipe( gulp.dest('dist/') )
}
