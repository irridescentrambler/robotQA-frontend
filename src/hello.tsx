import * as React from "react";
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Hello extends React.Component<any, any>{
  constructor(props: any){
    super(props);
    this.state = {
      on: true
    }
    this.changeState = this.changeState.bind(this);
    this.getState = this.getState.bind(this);
  }

  changeState(){
    this.setState({
      on: !this.state.on
    })
  }

  getState(){
    return this.state.on
  }

  render(){
    return(
      <div>
        <Button onClick = { this.changeState } color="danger">Click me</Button>
        <h1> State is { "'" + this.state.on + "'" }</h1>
      </div>
    );
  }
}

export default Hello;