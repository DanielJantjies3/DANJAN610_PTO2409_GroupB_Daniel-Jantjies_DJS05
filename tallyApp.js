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


 //Subsricbe to State Changes
const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
  listeners = listeners.filter(l => l !== listener);
    };
};


//Initialize
dispatch({ type: '@@INNIT'});

return {getState, dispatch, subscribe};
}


//Reducer Function
function counterReducer(state = { count: 0}, action) {
    switch(action.type) {
        case "ADD":
            return { count: state.count +1 };
        case "SUBTRACT":
            return { count: state.count -1 };
        case "RESET": 
            return { count: 0 };
        default:
            return state;
    }
} 

//Initialize Store
const store = createStore(counterReducer);


//Log State Changes to Console
store.subscribe(() => console.log("State:" , store.getState()));

//Scenario 1: Initial State Verification

console.log("SCENARIO 1: Initial State Verification");
console.log("Initial State:", store.getState());

//Scenario 2: Incrementing the Counter
console.log("\nSCENARIO 2: Incrementing the Counter");
store.dispatch({ type: "ADD"});
store.dispatch({ type: "ADD"});


//Scenario 3: Decrementing the Counter
console.log("\nSCENARIO 3: Decrementing the Counter");
store.dispatch({ type: "SUBTRACT"});








