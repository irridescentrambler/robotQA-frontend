import * as React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import '../../style/home.css';
import RobotRecord from "./RobotRecord";
import store from "../stores/ApplicationStore";

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

interface MyState {
  has_records: boolean,
  robots: Array<Robot>,
  fetching: boolean
}

class RobotTable extends React.Component<any, MyState>{
  constructor(props: any){
    super(props);
    this.state = {
      has_records: false,
      robots: [],
      fetching: false
    }
    this.fetchRobot = this.fetchRobot.bind(this);
    this.performQa = this.performQa.bind(this);
    store.subscribe(() =>{
      this.setState(store.getState());
    });
  }

  fetchRobot(){
    store.dispatch({ type: "FETCH_ROBOTS" });
  }

  performQa(){
    store.dispatch({ type: "PERFORM_QA" });
  }

  render(){
    return(
      <div className="robot-table">
        <Container>
          <Row>
            <Col>
              <Button onClick = { this.fetchRobot } color="primary">Fetch</Button>
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
                    <th>On Fire</th>
                    <th>Rusty</th>
                    <th>Loose screws</th>
                    <th>Paint scratched</th>
                  </tr>
                </thead>
                <RobotRecord robots = { this.state.robots } />
              </Table>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick = { this.performQa } color="primary">Perform QA</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default RobotTable;