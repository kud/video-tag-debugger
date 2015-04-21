var _ = require('lodash')

module.exports = {
  debug: function( video ) {
    _.each([
        'abort'
      , 'canplay'
      , 'canplaythrough'
      , 'durationchange'
      , 'emptied'
      , 'encrypted'
      , 'ended'
      , 'error'
      , 'loadeddata'
      , 'loadedmetadata'
      , 'loadstart'
      , 'pause'
      , 'play'
      , 'playing'
      , 'progress'
      , 'ratechange'
      , 'seeked'
      , 'seeking'
      , 'stalled'
      , 'suspend'
      , 'timeupdate'
      , 'volumechange'
      , 'waiting'
      ], function( item ) {
        video.addEventListener( item, function() {
          console.info( "🎬 has triggered `%s`.", item)
        })
    })
  }
}


