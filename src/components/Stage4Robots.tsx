import * as React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import '../../style/home.css';
import ShipmentRobots from "./ShipmentRobots";
import store from "../stores/ApplicationStore";
import Robot from "../interfaces/Robot";

interface MyState {
  has_records: boolean,
  ship: Robot[],
  fetching: boolean
}

interface MyProps {
  ship: Robot[]
}

class Stage4Robots extends React.Component<MyProps, MyState>{
  constructor(props: MyProps){
    super(props);
    this.state = {
      has_records: false,
      ship: this.props.ship,
      fetching: false
    }
  }

  componentWillReceiveProps(nextProps: MyProps){
    if(nextProps.ship.length > 0){
      this.setState({
        has_records: true,
        ship: nextProps.ship
      })
    }
    else{
      this.setState({
        has_records: false,
        ship: []
      })
    }
  }

  render(){
    if(this.state.has_records){
      return(
      <div>
        <Container className = "robot-table">
          <Row>
            <Col>
              <h2>Factory QA</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Has sentience</th>
                    <th>Has wheels</th>
                    <th>Has tracks</th>
                    <th>Number of rotors</th>
                    <th>Color</th>
                  </tr>
                </thead>
                <ShipmentRobots robots = { this.state.ship } />
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
      )
    }
    else{
      return(
        <div>
          <Container className = "robot-table">
            <Row>
              <Col>
                <h2>Factory QA</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Has sentience</th>
                      <th>Has wheels</th>
                      <th>Has tracks</th>
                      <th>Number of rotors</th>
                      <th>Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        No records
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </div>
        )
    }
  }
}

export default Stage4Robots;