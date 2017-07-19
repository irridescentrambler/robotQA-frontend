import axios from "axios";
import { fetchRobots, extinguishRobot, shipRobot } from "../actions/ApplicationActions"
import Robot from "../interfaces/Robot";

type MyState = {
  extinguish?: Robot[],
  recycle?: Robot[],
  factory_second?: Robot[],
  ship?: Robot[],
  id?: number
}

type Action = {
  type: string,
  payload?: MyState
}

const reducer = function(state: MyState = { }, action: Action):MyState {
  var changedState: MyState = state
  switch(action.type){
    case 'FETCH_ROBOTS': {
      changedState = fetchRobots()
      return changedState;
    }
    case 'DISPLAY_ROBOTS': {
      return action.payload
    }
    case 'EXTINGUISH_ROBOT': {
      changedState = extinguishRobot(action.payload.id);
      return changedState;
    }
    case 'SHIP_ROBOT': {
      changedState = shipRobot(action.payload.id);
      return changedState;
    }
  }
}

export default reducer;