import React, { Component } from "react";
import PropTypes from "prop-types"
import Body from "./component/body/Body"
import Head from "./component/head/Head"
import { createStore, storeChange} from './redux';
// import './App.css';

class App extends Component {
    static childContextTypes = {
        store: PropTypes.object,
        dispatch: PropTypes.func,
        subscribe: PropTypes.func,
        getStore: PropTypes.func
    }
    getChildContext() {
        const state = {
            head: "我是全局head",
            body: "我是全局body",
            headBtn: "修改head",
            bodyBtn: "修改body"
        }
        const { store,dispatch, subscribe,getStore } = createStore(state,storeChange)
        return { store,dispatch,subscribe,getStore}
    }
  render() {
    return (
      <div className="App">
       <Head />
        <Body />
      </div>
    );
  }
}

export default App;
