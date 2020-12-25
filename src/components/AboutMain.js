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
    "Projects",
    "Travel",
    "Hobbies",
    "Favorite Books",
    "Resume"
  ];
  const ListGroupContentsPlaintext = {
    Projects: [
      "Notion API Ruby Gem",
      "Sentiment Analysis App",
      "Open Source Contributions",
      "Portfolio Website",
    ],
    Travel: [
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

  const formattingFor = (items) => {
    const contents = items.map((item) => {
      return <ul>{item}</ul>;
    });
    return contents;
  };

  const ListGroupItemsFormatted = ListGroupItemsPlaintext.map(
    (itemPlaintext) => {
      return (
        <Tab eventKey={itemPlaintext} title={itemPlaintext}>
          <div>
            {formattingFor(ListGroupContentsPlaintext[itemPlaintext])}
          </div>
        </Tab>
      );
    }
  );

  return (
    <Row>
      <Col sm={9}>
        <TabContainer>{ListGroupItemsFormatted}</TabContainer>
      </Col>
    </Row>
  );
}