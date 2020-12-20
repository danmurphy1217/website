import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import { ListGroupItem } from "react-bootstrap";

export default function ColorsTimeline() {
  const ListGroupItemsPlaintext = [
    "Where I Was Born",
    "Where I've Lived",
    "High School",
    "College",
    "Places I've Visited",
    "Hobbies",
    "Favorite Books",
  ];
  const ListGroupContentsPlaintext = {
    "Where I Was Born": ["Wilmington, DE"],
    "Where I've Lived": ["Wilmington, DE", "Middletown, DE", "North East, MD"],
    "High School": ["The Tatnall School"],
    College: ["Davidson College"],
    "Places I've Visited": [
      "Kfir Yasif, Israel",
      "San Francisco, CA",
      "Denmark, Copenhagen",
    ],
    Hobbies: ["Reading", "Coding", "Cooking"],
    "Favorite Books": [
      "Lord of the Flies",
      "Acting with Power",
      "The New Silk Roads: The Present and Future of the World",
      "The Everything Store",
    ],
  };

  const DefaultKeyColors = {
    "Where I Was Born": { background: "white", text: "#525252" },
    "Where I've Lived": { background: "white", text: "#525252" },
    "High School": { background: "white", text: "#525252" },
    College: { background: "white", text: "#525252" },
    "Places I've Visited": { background: "white", text: "#525252" },
    Hobbies: { background: "white", text: "#525252" },
    "Favorite Books": { background: "white", text: "#525252" },
  };

  const [color, setColor] = useState(DefaultKeyColors);

  const ListGroupItemsFormatted = ListGroupItemsPlaintext.map(
    (itemPlaintext) => {
      return (
        <ListGroup.Item
          action
          key={itemPlaintext}
          style={{
            backgroundColor: `${color[itemPlaintext].background}`,
            color: `${color[itemPlaintext].text}`,
          }}
          href={`#${itemPlaintext}`}
          onClick={(e) => {
            console.log(DefaultKeyColors);
            DefaultKeyColors[e.target.textContent].background = "#525252";
            DefaultKeyColors[e.target.textContent].text = "#C8C8C8";
            setColor(DefaultKeyColors);
          }}
        >
          {itemPlaintext}
        </ListGroup.Item>
      );
    }
  );

  const ListGroupContentsFormatted = ListGroupItemsPlaintext.map(
    (itemPlaintext) => {
      return (
        <Tab.Pane eventKey={`#${itemPlaintext}`}>
          <Card>
            <Card.Header as="h5">&#127968;{ListGroupContentsPlaintext[itemPlaintext]}</Card.Header>
          </Card>
        </Tab.Pane>
      );
    }
  );
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>{ListGroupItemsFormatted}</ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>{ListGroupContentsFormatted}</Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
