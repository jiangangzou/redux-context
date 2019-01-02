export const createStore = (state,storeChange) => {
    const listeners = [];
    let  store = state || {};
    const subscribe = (listener) => {
        listeners.push(listener)
    }
    const  dispatch = (action) => {
       const newStore = storeChange(store,action);
       store = newStore;
       listeners.forEach((item) => item())
    }
    const getStore = () => {
        return store;
    }
    return {store,dispatch,subscribe,getStore}
}