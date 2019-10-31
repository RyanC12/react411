import React, { Component } from "react";
import UserBox from "./UserBox";
import { Col, Container, Row } from "reactstrap";

export default class Api extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  async componentDidMount() {
    const url = "https://randomuser.me/api?results=25";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    this.setState(
      {
        users: data.results
      },
      () => console.log(this.state.users)
    );
  }
  render() {
    let userCard = this.state.users.map((user, index) => {
      return (
        <Col sm="2">
          <UserBox key={index} user={user} index={index} />
        </Col>
      );
    }, this);
    return (
      <Container fluid>
        <Row>{userCard}</Row>
      </Container>
    );
  }
}
