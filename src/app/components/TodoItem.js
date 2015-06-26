import React from 'react/addons';

export default React.createClass({

  _onToggleComplete(){},

  _onDoubleClick(){},

  _onDestroyClick(){},

  render(){
    return (
      <li>
        <div className="view">
          <input
              className="toggle"
              type="checkbox"
              checked={todo.complete}
              onChange={this._onToggleComplete}
              />
          <label onDoubleClick={this._onDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy" onClick={this._onDestroyClick} />
        </div>
      </li>
    );
  }
});