import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import ModalUser from "./modal";

class UserBox extends Component {
  render() {
    let {
      email,
      name: { title, first, last },
      picture: { medium, large },
      location: { country, city },
      dob: { age },
      cell,
      gender
    } = this.props.user;

    return (
      <div>
        <Card>
          <CardBody className="cardbody">
            <CardTitle style={{ textAlign: "center", fontWeight: "bold" }}>
              {title} {first} {last}
            </CardTitle>
            <CardTitle style={{ textAlign: "center" }}>
              {age} {gender}
            </CardTitle>
            <CardImg top width="50px" src={medium} className="cardPic" />
            <ModalUser
              name={first}
              email={email}
              cell={cell}
              dob={age}
              picture={large}
              city={city}
              country={country}
            />
            <CardSubtitle></CardSubtitle>
            <CardText></CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default UserBox;
