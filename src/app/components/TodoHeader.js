import React from 'react/addons';

class TodoHeader extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <header id='header'>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

export default TodoHeader;