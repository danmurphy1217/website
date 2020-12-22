import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";

export default function AboutMain() {
  const ListGroupItemsPlaintext = [
    "Personal Projects",
    "Places I've Visited",
    "Hobbies",
    "Favorite Books",
    "Favorite Open Source Projects",
  ];
  const ListGroupContentsPlaintext = {
    "Personal Projects": [
      "Notion API Ruby Gem",
      "Sentiment Analysis App",
      "Open Source Contributions",
    ],
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
    "Favorite Open Source Projects": [
      "The Algorithms: Python",
      "GitHub CLI",
      "Vagrant",
      "Shopify API Ruby Gem",
      "VSCode",
      "Python Patterns",
    ],
  };

  const DefaultKeyColors = {
    "Personal Projects": { background: "white", text: "#525252" },
    "Places I've Visited": { background: "white", text: "#525252" },
    Hobbies: { background: "white", text: "#525252" },
    "Favorite Books": { background: "white", text: "#525252" },
    "Favorite Open Source Projects": { background: "white", text: "#525252" },
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
      const plaintextItems = ListGroupContentsPlaintext[itemPlaintext]
      const listItems = plaintextItems.map( (item) => {
        return <Card.Text>{item}</Card.Text>
      })
      return (
        <Tab.Pane eventKey={`#${itemPlaintext}`}>
          <Card>
          { listItems }
            {/* <Card.Header as="h5"> */}
              {/* {ListGroupContentsPlaintext[itemPlaintext]} */}
            {/* </Card.Header> */}
          </Card>
        </Tab.Pane>
      );
    }
  );
  return (
      <Tab.Container id="list-group-tabs-example">
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
