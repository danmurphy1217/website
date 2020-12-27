import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styled from "styled-components";

// TODO: add "My Bookshelf" page

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
  ];
  const ListGroupContentsPlaintext = {
    Projects: [
      {
        Title: "Notion API Ruby Gem",
        Link: "https://github.com/danmurphy1217/notion-ruby",
      },
      {
        Title: "Sentiment Analysis App",
        Link: "https://github.com/dylane1999/SentimentAnalysisApp",
      },
      {
        Title: "Open Source Contributions",
        Link: "https://github.com/danmurphy1217",
      },
      {
        Title: "Portfolio Website",
        Link: "https://github.com/danmurphy1217/website",
      },
    ],
    Travel: ["Kfir Yasif, Israel", "San Francisco, CA", "Denmark, Copenhagen"],
    Hobbies: ["Reading", "Coding", "Cooking", "Writing"],
    "Favorite Books": [
      "Lord of the Flies",
      "Acting with Power",
      "The New Silk Roads: The Present and Future of the World",
      "The Everything Store",
    ],
  };

  const formattingFor = (items, itemsGroup) => {
    console.log(itemsGroup);
    const contents = items.map((item) => {
      switch (itemsGroup) {
        case "Projects":
          return (
            <li style={{ minHeight: "50px" }} key={item}>
              {item.Title}{" "}
              <Button variant="dark" href={item.Link} target="_blank">
                Source Code
              </Button>
            </li>
          );
        default:
          return <li key={item}>{item}</li>;
      }
    });
    return contents;
  };

  const ListGroupItemsFormatted = ListGroupItemsPlaintext.map(
    (itemPlaintext) => {
      return (
        <Tab
          eventKey={itemPlaintext}
          title={itemPlaintext}
          style={{ textAlign: "center" }}
        >
          <ul 
          style={{display: "inline-block", textAlign: "left", listStyleType:"none"}}
          >
            {formattingFor(
              ListGroupContentsPlaintext[itemPlaintext],
              itemPlaintext
            )}
          </ul>
        </Tab>
      );
    }
  );

  return (
    <Container>
      <Col>
        <TabContainer fill>{ListGroupItemsFormatted}</TabContainer>
      </Col>
    </Container>
  );
}
