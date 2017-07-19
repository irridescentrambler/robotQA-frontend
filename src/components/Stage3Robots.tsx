import * as React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import '../../style/home.css';
import RobotRecord from "./RobotRecord";
import store from "../stores/ApplicationStore";
import Robot from "../interfaces/Robot";

interface MyState {
  has_records: boolean,
  factory_second: Robot[],
  fetching: boolean
}

interface MyProps {
  factory_second: Robot[]
}

class Stage3Robots extends React.Component<MyProps, MyState>{
  constructor(props: MyProps){
    super(props);
    this.state = {
      has_records: false,
      factory_second: this.props.factory_second,
      fetching: false
    }
  }

  componentWillReceiveProps(nextProps: MyProps){
    if(nextProps.factory_second.length > 0){
      this.setState({
        has_records: true,
        factory_second: nextProps.factory_second
      })
    }
    else{
      this.setState({
        has_records: false,
        factory_second: []
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
              <h2>Factory 2</h2>
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
                <RobotRecord robots = { this.state.factory_second } />
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
                <h2>Factory 2</h2>
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

export default Stage3Robots;