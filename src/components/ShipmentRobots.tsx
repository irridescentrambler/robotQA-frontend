import * as React from "react";
import { Button } from "reactstrap";
import store from "../stores/ApplicationStore";
import { shipOrder } from "../actions/ApplicationActions";

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
  paint_scratched: boolean
}

interface MyProps {
  robots: Array<Robot>
}

class ShipmentRobots extends React.Component<MyProps, any>{

  constructor(props: MyProps){
    super(props);
    this.shipOrder = this.shipOrder.bind(this);
  }

  shipOrder(id: number){

  }

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
            <td><Button color="success">Ship</Button></td>
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