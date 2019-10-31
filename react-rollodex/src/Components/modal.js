import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  Card,
  CardImg,
  CardText,
  CardTitle
} from "reactstrap";

const ModalUser = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" onClick={toggle} style={{ marginTop: "5px" }}>
        Click For More Info
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Hi! Im {props.name}</ModalHeader>
        <Card>
          <CardImg
            style={{ height: "400px", width: "100%" }}
            src={props.picture}
            className="cardPic"
          />
          <CardTitle>
            <strong>A little bit about me.</strong>
          </CardTitle>
          <CardText>
            My name is {props.name}. I am {props.dob} years old and from{" "}
            {props.city}, {props.country}. If you would like to know more please
            email me or give me a call. <br />
            {props.email}
            <br />
            {props.cell}
          </CardText>
        </Card>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Message {props.name}
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalUser;
