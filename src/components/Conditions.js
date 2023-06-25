import React from "react";
import { SlCheck } from "react-icons/sl";
import { RxCrossCircled } from "react-icons/rx";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Condition(prop) {
  const [isConditionMet, setIsConditionMet] = useState(false);

  console.log(prop.state);

  if (prop.state) {
    setIsConditionMet(true);
  }

  return (
    <div>
      <hr />
      <Row>
        <Col sm={10}>{prop.text}</Col>

        <Col sm={2}>{isConditionMet ? <SlCheck /> : <RxCrossCircled />}</Col>
      </Row>
    </div>
  );
}

export default Condition;
