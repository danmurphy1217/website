import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styled from "styled-components";

const TabContainer = styled(Tabs)`
  display: "flex";
  flex-direction: "column";
  align-items: "center";
`;

export default function AboutMain() {
  const ListGroupItemsPlaintext = [
    "Personal Projects",
    "Places I've Visited",
    "Hobbies",
    "Favorite Books",
    "Resume"
  ];
  const ListGroupContentsPlaintext = {
    "Personal Projects": [
      "Notion API Ruby Gem",
      "Sentiment Analysis App",
      "Open Source Contributions",
      "Portfolio Website",
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
    Resume: ["LINK IT"]
  };

  const ContentsFor = (items) => {
    const contents = items.map((item) => {
      return <ul>{item}</ul>;
    });
    return contents;
  };

  const DefaultKeyColors = {
    "Personal Projects": { background: "white", text: "#525252" },
    "Places I've Visited": { background: "white", text: "#525252" },
    Hobbies: { background: "white", text: "#525252" },
    "Favorite Books": { background: "white", text: "#525252" },
    Resume: { background: "white", text: "#525252" }
  };

  const [color, setColor] = useState(DefaultKeyColors);

  const ListGroupItemsFormatted = ListGroupItemsPlaintext.map(
    (itemPlaintext) => {
      return (
        <Tab eventKey={itemPlaintext} title={itemPlaintext}>
          <div>
            {ContentsFor(ListGroupContentsPlaintext[itemPlaintext])}
          </div>
        </Tab>
      );
    }
  );

  return (
    <Row
      style={{
        paddingBottom: "10%",
      }}
    >
      <Col sm={12} style={{alignItems: "center"}}>
        <TabContainer>{ListGroupItemsFormatted}</TabContainer>
      </Col>
    </Row>
  );
}
