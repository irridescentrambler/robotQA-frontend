import * as React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

interface MyState {
  isOpen: boolean
}

class Header extends React.Component<any, MyState>{
  constructor(props: MyState){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return(
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">RobotQA</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>

              </NavItem>
              <NavItem>
                <NavLink href="/components/">Stage 2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Stage 3</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Stage 4</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;