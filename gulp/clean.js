module.exports = function( cb ) {
  require('rimraf').sync('dist/')

  cb()
}
