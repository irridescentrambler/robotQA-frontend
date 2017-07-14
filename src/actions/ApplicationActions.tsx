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