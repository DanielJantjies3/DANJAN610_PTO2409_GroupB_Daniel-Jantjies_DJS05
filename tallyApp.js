// Store Implementation (Create Store Function)

function createStore(reducer) {
    let state;
    let listeners = [];

//Get Current State
const getState = () => state;

//Dispatch Changes and Update State (Dispatch Function)
const dispatch = (action) => {
    state = reducer (state, action);
    listeners.forEach(listener => listener());
};

}