import * as React from "react";
import { Button } from "reactstrap";
import store from "../stores/ApplicationStore"

interface Robot {
  id: number,
  name: string,
  has_sentience: boolean,
  has_wheels: boolean,
  has_tracks: boolean,
  number_of_rotors: number,
  color: string,
  on_fire: boolean,
  rusty: boolean,
  loose_screws: boolean,
  paint_scratched: boolean,
  is_extinguished: boolean,
  is_shipped: boolean
}

interface MyProps {
  robots: Array<Robot>
}

class ExtinguishRobotRecord extends React.Component<MyProps, any>{

  constructor(props: MyProps){
    super(props);
    this.extinguish = this.extinguish.bind(this);
    this.checkColorStatus = this.checkColorStatus.bind(this);
    this.checkExtinguishedStatus = this.checkExtinguishedStatus.bind(this);
  }

  extinguish(id: number){
    store.dispatch({ type: "EXTINGUISH_ROBOT", payload: {id: id} })
  }

  checkColorStatus(robot: Robot): any{
    if(robot.is_extinguished){
      return "success"
    }
    else{
      return "danger"
    }
  }

  checkExtinguishedStatus(robot: Robot): any{
    if(robot.is_extinguished){
      return "Extinguished.."
    }
    else{
      return "Extinguish"
    }
  }

  render(){
    var robots = this.props.robots.map((robot)=>{
      return(
          <tr key = { robot.id }>
            <td>{ robot.id }</td>
            <td>{ robot.name }</td>
            <td>{ "'" + robot.has_sentience + "'" }</td>
            <td>{ "'" + robot.has_wheels + "'" }</td>
            <td>{ "'" + robot.has_tracks + "'" }</td>
            <td>{ robot.number_of_rotors }</td>
            <td>{ robot.color }</td>
            <td><Button onClick = { ()=>{ this.extinguish(robot.id) } } color = { this.checkColorStatus(robot) } >{ this.checkExtinguishedStatus(robot) }</Button></td>
          </tr>
        )
    });
    return(
      <tbody>
        { robots }
      </tbody>
    )
  }
}

export default ExtinguishRobotRecord;