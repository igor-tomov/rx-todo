var LEVELS = {
  ERROR: 0,
  WARN: 1,
  INFO: 2,
  DEBUG: 3
};

if ( typeof LOGGING_LEVEL === 'undefined' ){
  var LOGGING_LEVEL = LEVELS.ERROR;
}

var noop = function () {};

function getLogger( method ){
  if ( typeof console === 'undefined' || typeof console.log !== 'function' ){
    return noop;
  }

  if ( ! console[ method ] ){
    method = 'log';
  }

  return function( args ){
    if ( console[method].apply ){
      console[method].apply( console, args );
    }else{
      Function.prototype.bind.call( console[method], console ).apply( console, args );
    }
  }
}


export default {
  log: function(){
    getLogger( 'log' )( arguments );
  },

  error: function(){
    if ( LOGGING_LEVEL >= LEVELS.ERROR ) {
      getLogger( 'error' )( arguments );
    }
  },

  warn: function(){
    if ( LOGGING_LEVEL >= LEVELS.WARN ) {
      getLogger( 'warn' )( arguments );
    }
  },

  info: function(){
    if ( LOGGING_LEVEL >= LEVELS.INFO ) {
      getLogger( 'info' )( arguments );
    }
  },

  debug: function(){
    if ( LOGGING_LEVEL === LEVELS.DEBUG ) {
      getLogger( 'debug' )( arguments );
    }
  }
}