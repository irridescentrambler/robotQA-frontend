import * as React from "react";
import { Button } from "reactstrap";
import store from "../stores/ApplicationStore";
import Robot from "../interfaces/Robot"

interface MyProps {
  robots: Array<Robot>
}

class ShipmentRobots extends React.Component<MyProps, any>{

  constructor(props: MyProps){
    super(props);
    this.ship = this.ship.bind(this);
    this.checkColorStatus = this.checkColorStatus.bind(this);
    this.checkShippedStatus = this.checkShippedStatus.bind(this);
  }

  ship(id: number){
    store.dispatch({ type: "SHIP_ROBOT", payload: {id: id} });
  }

  checkColorStatus(robot: Robot): any{
    if(robot.is_shipped){
      return "primary"
    }
    else{
      return "info"
    }
  }

  checkShippedStatus(robot: Robot){
    if(robot.is_shipped){
      return "Shipped...."
    }
    else{
      return "Ship"
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
            <td><Button onClick = { ()=>{ this.ship(robot.id) } } color = { this.checkColorStatus(robot) } >{ this.checkShippedStatus(robot) }</Button></td>
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

export default ShipmentRobots;