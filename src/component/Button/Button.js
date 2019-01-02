import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    static contextTypes = {
        store: PropTypes.object,
        dispatch: PropTypes.func,
        subscribe: PropTypes.func,
        getStore: PropTypes.func

    }
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        this._upState();
    }

    _upState() {
        const { store } = this.context;
        this.setState({
            ...store
        })
    }
    changeContext(type) {
        const { dispatch } =this.context;
        const key = type === "HEAD" ? "head":"body";
        dispatch({
            type: type,
            // [key]: `我是修改后的${key}`
            payload: `我是修改后的${key}`
        })
    }

  render () {
    return (
      <div className="button">
        <div className="btn" onClick={() => {
            this.changeContext("HEAD")
        }}>改变head</div>
        <div className="btn" onClick={() => {
            this.changeContext("BODY")
        }}>改变body</div>
      </div>
    )
  }
}
