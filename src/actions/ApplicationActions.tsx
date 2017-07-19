import axios from "axios";
import store from "../stores/ApplicationStore";
import Robot from "../interfaces/Robot";
import MyState from "../interfaces/ApplicationState";

var emptyState: MyState = {
  extinguish: [],
  recycle: [],
  factory_second: [],
  ship: []
}

export var fetchRobots = function():MyState {
  let changedState: MyState = emptyState
  axios.get('http://localhost:3000/robots.json')
  .then((response) =>{
    changedState = response.data
    store.dispatch({ type: "DISPLAY_ROBOTS", payload: changedState });
  })
  .catch((error) =>{
    changedState = emptyState
    //Display Error message
  });
  return changedState;
}

export var shipRobot = function(id: number): MyState {
  var changedState: MyState = emptyState
  axios.post('http://localhost:3000/robots/' + id + '/ship.json')
  .then((response) =>{
    store.dispatch({ type: "FETCH_ROBOTS" });
    store.dispatch({ type: "DISPLAY_ROBOTS", payload: changedState });
    //Display success message
  })
  .catch((error) =>{
    changedState = emptyState
    //Display error message
  });
  return changedState;
}

export var extinguishRobot = function(id: number): MyState {
  var changedState: MyState = emptyState
  axios.post('http://localhost:3000/robots/' + id + '/extinguish.json')
  .then(function (response) {
    store.dispatch({ type: "FETCH_ROBOTS" });
    store.dispatch({ type: "DISPLAY_ROBOTS", payload: changedState });
    // Display success message
  })
  .catch(function (error) {
    changedState = emptyState
    // Display error message
  });
  return changedState
}