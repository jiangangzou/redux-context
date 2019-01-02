import React, {Component} from 'react';
import Button from '../Button/Button';
import PropTypes from "prop-types";

export default class Body extends Component {
    static contextTypes = {
        store: PropTypes.object,
        subscribe: PropTypes.func,
        getStore: PropTypes.func
    }
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount () {
        const { subscribe } = this.context;
        this._upState();
        subscribe(()=> this._upState())
    }

    _upState() {
        const { getStore } = this.context;
        this.setState({
            ...getStore()
        })
    }
  render () {
    return (
      <div>
        <div className="body">{this.state.body}</div>
        <Button/>
      </div>
    )
  }
}
