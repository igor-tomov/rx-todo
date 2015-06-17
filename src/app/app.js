import React from 'react/addons';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = { title: 'Rx-Todo' }
    }

    render(){
        return (
          <div>
              <h1>{this.state.title}</h1>
          </div>
        );
    }
}

export default  App;