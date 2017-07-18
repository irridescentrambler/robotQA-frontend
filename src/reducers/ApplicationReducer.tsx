import axios from "axios";
import { fetchRobots } from "../actions/ApplicationActions"

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

type Action = {
  type: string,
  payload?: MyState
}

const reducer = function(state: MyState = { }, action: Action):MyState {
  var changedState: MyState = state
  switch(action.type){
    case 'FETCH_ROBOTS': {
      console.log("FETCH ROBOTS called");
      changedState = fetchRobots()
      return changedState;
    }
    case 'DISPLAY_ROBOTS': {
      console.log("DISPLAY ROBOTS called");
      return action.payload
    }
    case 'SHIP_ORDER': {
      console.log("SHIP ORDER called");
      
    }
  }
}

export default reducer;