var _ = require('lodash')

module.exports = {

  on: function( video, message ) {
    var msg = message || "🎬 has triggered `%s`."

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
          console.info( msg, item )
        })
    })
  }

}


