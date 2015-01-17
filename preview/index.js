var socket = require( 'socket.io-client' )( 'https://api.agencycloud.io:443' );

exports.handler = function( event , context ) {

  socket.emit( 'clean' , event.Records[ 0 ].s3.object.key , function() {

    console.log( 'Done!' );

    context.done();

  });

};
