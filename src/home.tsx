import * as React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import '../style/home.css';
import store from "./stores/ApplicationStore"
import RobotQA from "./components/RobotQA"

class Home extends React.Component<any, any>{
  constructor(props: any){
    super(props);
    this.state = {
      robots: []
    }
  }

  render(){
    return(
      <RobotQA/>
    )
  }
}

export default Home;
