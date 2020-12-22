import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

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

  function formatContents(plaintextContents) {
    var mappedComponents = plaintextContents.map((component) => {
      return <Card.Title>{component}</Card.Title>;
    });

    return mappedComponents;
  }

  const ListGroupItemsFormatted = ListGroupItemsPlaintext.map(
    (itemPlaintext) => {
      return (
        <Tab eventKey={itemPlaintext} title={itemPlaintext}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Tab>
      );
    }
  );

  return (
    <Row
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Col sm={7} style={{ minHeight: "50vh", height: "auto" }}>
        <Tabs>{ListGroupItemsFormatted}</Tabs>
      </Col>
    </Row>
  );
}
