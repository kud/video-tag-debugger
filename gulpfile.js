var gulp     = require('gulp')

var taskPath = __dirname + '/gulp/'

/**
 * Private tasks
 */
gulp.task('clean', require(taskPath + 'clean'))
gulp.task('scripts', ['validate'], require(taskPath + 'scripts'))
gulp.task('static', require(taskPath + 'static'))
gulp.task('server', require(taskPath + 'server'))
gulp.task('validate', require(taskPath + 'validate'))

/**
 * Public tasks
 */
gulp.task('compile', ['clean', 'static', 'scripts'])
gulp.task('watch', ['server', 'compile'], function() {

  gulp.watch( [
    'src/**/*.js',
    'tests/index.js'
  ], ['scripts'])

  gulp.watch( [
    'tests/**/*',
     '!tests/index.js'
  ], ['static'])

})

gulp.task('default', ['compile'])



