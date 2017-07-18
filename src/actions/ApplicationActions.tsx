import axios from "axios";
import store from "../stores/ApplicationStore"

type Robot = {
  id?: number,
  name?: string,
  has_sentience?: boolean,
  has_wheels?: boolean,
  has_tracks?: boolean,
  number_of_rotors?: number,
  color?: string,
  on_fire?: boolean,
  rusty?: boolean,
  loose_screws?: boolean,
  paint_scratched?: boolean
}

type MyState = {
  extinguish?: Robot[],
  recycle?: Robot[],
  factory_second?: Robot[],
  ship?: Robot[]
}

export var fetchRobots = function():MyState {
  var changedState: MyState = {}
  axios.get('http://localhost:3000/robots.json')
  .then((response) =>{
    changedState = response.data
    store.dispatch({ type: "DISPLAY_ROBOTS", payload: changedState });
  })
  .catch((error) =>{
    changedState = {}
  });
  return changedState;
}

export var shipRobot = function(id: number): MyState {
  var changedState: MyState = {}
  axios.post('http://localhost:3000/robots/' + id + '/ship.json')
  .then((response) =>{
    store.dispatch({ type: "FETCH_ROBOTS" });
    store.dispatch({ type: "DISPLAY_ROBOTS", payload: changedState });
  })
  .catch((error) =>{
    changedState = {}
  });
  return changedState;
}

export var extinguishRobot = function(id: number): MyState {
  var changedState: MyState = {}
  axios.post('http://localhost:3000/robots/' + id + '/extinguish.json')
  .then(function (response) {
    store.dispatch({ type: "FETCH_ROBOTS" });
    store.dispatch({ type: "DISPLAY_ROBOTS", payload: changedState });
  })
  .catch(function (error) {
    changedState = {}
  });
  return changedState
}