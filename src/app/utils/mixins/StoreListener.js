export default ( StoreCreator ) => {
  return {
    componentWillMount(){
      var store = StoreCreator();

      this.__storeSubscription__ = store.subscribe( this.onStoreChange );
    },

    onStoreChange( state ){
      this.setState( state );
    },

    componentWillUnmount(){
      this.__storeSubscription__.dispose();
    }
  }
}