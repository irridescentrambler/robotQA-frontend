import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducer from "../reducers/ApplicationReducer";

var store: any = createStore(reducer);

store.dispatch({ type: "INDEX" });
export default store