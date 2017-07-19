import * as React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import '../../style/home.css';
import ExtinguishRobotRecords from "./ExtinguishRobotRecords";
import store from "../stores/ApplicationStore";
import Robot from "../interfaces/Robot";

interface MyState {
  has_records: boolean,
  extinguish: Array<Robot>,
  fetching: boolean
}

interface MyProps {
  extinguish: Robot[]
}

class Stage1Robots extends React.Component<MyProps, MyState>{
  constructor(props: any){
    super(props);
    this.state = {
      has_records: false,
      extinguish: this.props.extinguish,
      fetching: false
    }
  }

  componentWillReceiveProps(nextProps: MyProps){
    if(nextProps.extinguish.length > 0){
      this.setState({
        has_records: true,
        extinguish: nextProps.extinguish
      })
    }
    else{
      this.setState({
        has_records: false,
        extinguish: []
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
              <h2>Robots need to be extinguished</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table responsive>
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
                <ExtinguishRobotRecords robots = { this.state.extinguish } />
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
                <h2>Robots need to be extinguished</h2>
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

export default Stage1Robots;