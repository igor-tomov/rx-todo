export default ( StoreCreator ) => {
  return {
    componentDidMount(){
      var store = StoreCreator( this.getInitialStore && this.getInitialStore() );

      this.__storeSubscription__ = store.subscribe( this.onStoreChange );
    },

    onStoreChange( state ){
      state = this.getStateFromStore ? this.getStateFromStore( state ) : state;

      this.setState( state );
    },

    componentWillUnmount(){
      this.__storeSubscription__.dispose();
    }
  }
}