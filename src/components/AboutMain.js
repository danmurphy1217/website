import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Card from "react-bootstrap/Card";

export default function ColorsTimeline() {
  const timelineData = [
    "Where I Was Born",
    "Where I Went To High School",
    "Where I Went To College",
    "Where I've Travelled To",
    "My Hobbies",
  ];
  const timelineItems = [];
  timelineData.forEach((item) => {
    const indexOfItem = timelineData.indexOf(item);

    const color = indexOfItem % 2 === 0 ? "primary" : "grey";
    const connector =
      indexOfItem === timelineData.length - 1 ? null : <TimelineConnector />;
    const styledItem = (
      <Card >
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    );

    timelineItems.push(
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={color} />
          {connector}
        </TimelineSeparator>
        <TimelineContent>{styledItem}</TimelineContent>
      </TimelineItem>
    );
  });
  return <Timeline align="alternate">{timelineItems}</Timeline>;
}
