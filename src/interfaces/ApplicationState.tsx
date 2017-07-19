import Robot from "./Robot";

interface MyState {
  extinguish: Robot[],
  recycle: Robot[],
  factory_second: Robot[],
  ship: Robot[]
}

export default MyState;