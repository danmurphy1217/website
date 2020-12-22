import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
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
        <Tab eventKey={itemPlaintext} title={itemPlaintext}>
          {ListGroupContentsPlaintext[itemPlaintext]}
        </Tab>
      );
    }
  );
  
  return (
      <Row style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Col sm={7}>
          <ListGroup>
            <Tabs>
              {ListGroupItemsFormatted}
            </Tabs>
            </ListGroup>
        </Col>
      </Row>
  );
}
