import React from 'react/addons';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = { title: 'Rx-Todo' }
    }

    render(){
        return (
          <section>
              <h1>{this.state.title}</h1>
          </section>
        );
    }
}

export default App;