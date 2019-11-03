import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Dropdowns extends Component {
  state = {
    dropdownOpen: false,
    dropdownValue: "Search By All"
  };
  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  changeValue = e => {
    this.setState({
      dropdownValue: e.target.innerText
    });
    this.props.callBack(e.target.innerText);
  };
  //   someFn=()=> {

  //   }

  render() {
    return (
      <div>
        <Dropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          size="sm"
        >
          <DropdownToggle caret>{this.state.dropdownValue}</DropdownToggle>

          <DropdownMenu>
            <DropdownItem onClick={this.changeValue}>story</DropdownItem>
            <DropdownItem onClick={this.changeValue}>comment</DropdownItem>
            <DropdownItem onClick={this.changeValue}>front_page</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
