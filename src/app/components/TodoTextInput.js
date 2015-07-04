import React from 'react/addons';
import KeyCodes from '../constants/KeyCodeConstants';

var PropTypes = React.PropTypes;

export default React.createClass({

  propTypes: {
    id: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    autoFocus: PropTypes.bool,

    onUpdate: PropTypes.func,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    onEnter: PropTypes.func,
    onEsc: PropTypes.func
  },



  getInitialState(){
    return {
      value: this.props.value || ''
    }
  },



  componentDidMount(){
    if ( this.props.autoFocus ){
      var node = this.getDOMNode();

      // this hack puts text cursor at the end of string
      node.value = node.value;
    }
  },



  componentWillReceiveProps( newProps ){
    if ( this.state.value !== newProps.value ){
      this.setState({ value: newProps.value });
    }
  },



  _onChange( event ){
    var { onUpdate, onChange } = this.props;

    var value   = event.target.value,
        keyCode = event.which;

    this.setState({ value: event.target.value });

    onUpdate && onUpdate( value, keyCode );
    onChange && onChange( value );
  },



  _onKeyDown( event ){
    var { onUpdate, onEnter, onEsc, onKeyDown } = this.props;

    var keyCode = event.which,
        value   = event.target.value;

    onKeyDown && onKeyDown( keyCode, value );
    onUpdate && onUpdate( value, keyCode );

    if ( onEnter && keyCode === KeyCodes.ENTER ){
      onEnter( value );
    }

    if ( onEsc && keyCode === KeyCodes.ESC ){
      onEsc( value );
    }
  },



  _onBlur( event ){
    var onBlur = this.props.onBlur;

    onBlur && onBlur( event.target.value );
  },



  render(){
    var {className, id, autoFocus} = this.props;

    return (
      <input
        type='text'
        id={id}
        value={this.state.value}
        className={className}
        placeholder='What needs to be done'
        autoFocus={autoFocus}
        onKeyDown={this._onKeyDown}
        onChange={this._onChange}
        onBlur={this._onBlur}
      />
    );
  }

});