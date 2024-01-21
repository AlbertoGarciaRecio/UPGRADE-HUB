import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
// Vamos a usar legacy_createStore con su sintaxis propia, aunque lo apodemos como createStore
import authReducer from "./reducers/auth.reducer";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
    auth: authReducer,
    // city: cityReducer, (en caso de que tenga otros datos en mi store)
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;