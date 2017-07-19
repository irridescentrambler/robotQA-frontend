import * as React from "react";
import Robot from "../interfaces/Robot";

interface MyProps {
  robots: Array<Robot>
}

class RobotRecord extends React.Component<MyProps, any>{

  render(){
    var robots = this.props.robots.map(function(robot){
      return(
          <tr key = { robot.id }>
            <td>{ robot.id }</td>
            <td>{ robot.name }</td>
            <td>{ "'" + robot.has_sentience + "'" }</td>
            <td>{ "'" + robot.has_wheels + "'" }</td>
            <td>{ "'" + robot.has_tracks + "'" }</td>
            <td>{ robot.number_of_rotors }</td>
            <td>{ robot.color }</td>
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

export default RobotRecord;