import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import "./index.css";
import Check from "./Check.js";
import React, { useState} from "react";
import { Liked } from "./Liked";
import { TweetwithHash } from "./TweetwithHash";
import Card from "react-bootstrap/Card";
import UserConnected from "../UserConnected";



function BrandExample() {
  const [isConnected, userIsConnected] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="./hola-logo.svg"
              className="d-inline-block align-bottom"
              alt=" "
            />
          </Navbar.Brand>
          <Nav className="me-auto"></Nav>
          <div className="mb-2">
            {isConnected ?
              <UserConnected />
              : <Button variant="warning" size="lg">
                Connect Twitter
              </Button>}
          </div>
        </Container>
      </Navbar>
      <br />
      <Container>
        <Stack direction="horizontal" gap={5}>
          <div>
            <Image src="./frame.png" rounded />
          </div>
          <div className="">
            <Stack gap={3}>
              <div>
                <h1>Holaplex Hub NFT</h1>
                <h3>Do some stuff and claim a free NFT</h3>
              </div>
              <div>
                {" "}
                <hr /> <span>Connect Your Twitter Account</span> <Check />
              </div>
              <div>
                {" "}
                <hr />
                Like this tweet <Liked />
              </div>
              <div>
                {" "}
                <hr />
                Tweet with hashtag #holaplexhub <TweetwithHash />
              </div>
              <Card className="bg-dark text-light">
                <Card.Body>
                  Criteria Not Met:(
                  {" "}
                  <Button disabled={true} variant="warning" size="lg">Claim Now</Button>
                </Card.Body>
              </Card>
            </Stack>
          </div>
        </Stack>
        {/* <Row>
          <Col xs={6} md={4}>
            <Image src="./frame.png" rounded />
          </Col>
          <Col>
          <h1>Holaplex Hub NFT</h1>
          <h3>Do some stuff and claim a free NFT</h3>
          <Stack direction="horizontal" gap={3}>
      <Form.Control className="me-auto" placeholder="" />
    </Stack>
          </Col>
        </Row> */}
      </Container>
    </>
  );
}

export default BrandExample;
