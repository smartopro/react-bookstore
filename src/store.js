import {applyMiddleware, createStore} from "redux";
import reducer from "./reducers";
import thunkMiddleware from "redux-thunk";

// const stringEnhancer = createStore => (...args) => {
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch;
//
//     store.dispatch = action => {
//         if (typeof action === "string") {
//             return originalDispatch({type: action})
//         } else return originalDispatch(action);
//     }
//
//     return store;
// }
//
// const logEnhancer = createStore => (...args) => {
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch;
//
//     store.dispatch = action => {
//         console.log(action);
//         return originalDispatch(action);
//     }
//
//     return store;
// }

// const logMiddleware = ({getState, dispatch}) => dispatch => action => {
//     console.log("type:", action.type, "; state:", getState());
//     return dispatch(action);
// };

const stringMiddleware = store => dispatch => action => {
    if (typeof action === "string") return dispatch({type: action})
    else return dispatch(action);
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware));

store.dispatch("Hello_world_action");

// THUNK:

// const delayedAction = dispatch => {
//     setTimeout(() => {
//         dispatch({ type: "DELAYED_ACTION" })
//     }, 2000);
// }

const delayedActionCreator = ms => dispatch => {
    setTimeout(() => {
        dispatch({ type: "DELAYED_ACTION" })
    }, ms);
}

store.dispatch(delayedActionCreator(2000));

export default store;
