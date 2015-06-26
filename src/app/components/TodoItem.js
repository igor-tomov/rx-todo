import React from 'react/addons';

export default React.createClass({

  _onToggleComplete(){
    this.props.onToggleComplete( this.props.id );
  },

  _onDoubleClick(){},

  _onDestroyClick(){},

  _getEditInput(){

  },

  render(){
    var {text, completed} = this.props;

    return (
      <li>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={this._onToggleComplete}
          />
          <label onDoubleClick={this._onDoubleClick}>
            {text}
          </label>
          <button className="destroy" onClick={this._onDestroyClick} />
        </div>
      </li>
    );
  }
});