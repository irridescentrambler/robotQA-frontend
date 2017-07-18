import * as React from "react";
import Stage1Robots from "./Stage1Robots";
import Stage2Robots from "./Stage2Robots"
import Stage3Robots from "./Stage3Robots"
import Stage4Robots from "./Stage4Robots"
import store from "../stores/ApplicationStore";
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

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

interface MyState {
  extinguish: Robot[],
  recycle: Robot[],
  factory_second: Robot[],
  ship: Robot[]
}

class RobotQA extends React.Component<any, MyState>{
  constructor(props: any){
    super(props);
    this.fetchRobots = this.fetchRobots.bind(this);
    this.state = {
      extinguish: [],
      recycle: [],
      factory_second: [],
      ship: []
    }
    store.subscribe(() => {
      this.setState(store.getState());
    });
    store.dispatch({ type: "FETCH_ROBOTS" });
  }

  fetchRobots(){
    store.dispatch({ type: 'FETCH_ROBOTS' });
  }

  render(){
    return(
        <Container className="qa-table">
          <Row>
            <Col>
              <Stage1Robots extinguish = { this.state.extinguish }/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Stage2Robots recycle = { this.state.recycle }/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Stage3Robots factory_second = { this.state.factory_second }/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Stage4Robots ship = { this.state.ship }/>
            </Col>
          </Row>
        </Container>
      );
  }
}

export default RobotQA;