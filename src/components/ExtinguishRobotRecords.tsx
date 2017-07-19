import * as React from "react";
import { Button } from "reactstrap";
import store from "../stores/ApplicationStore";
import Robot from "../interfaces/Robot";
import MyProps from "../interfaces/TableProps";

class ExtinguishRobotRecords extends React.Component<MyProps, any>{

  constructor(props: MyProps){
    super(props);
    this.extinguish = this.extinguish.bind(this);
    this.checkColorStatus = this.checkColorStatus.bind(this);
    this.checkExtinguishedStatus = this.checkExtinguishedStatus.bind(this);
  }

  // extinguish a robot with id
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

  // Checks whether the robot is extinguished or not
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

export default ExtinguishRobotRecords;