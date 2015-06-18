if ( ! global.localStorage ){
  throw new Error( "LocalStorage isn't supported" );
}

export default {
  fetch: ( name ) => {
    var raw = localStorage.getItem( name ),
        data;

    if ( ! raw ){
      return null;
    }

    try{
      data = JSON.parse( raw );
    }catch( e ){
      console.warn( 'Invalid data has been retrieve from LocalStorage', raw );
      data = null;
    }

    return data;
  },

  save: ( name, data ) => {
    localStorage.setItem( name, JSON.stringify( data ) );
  }
}