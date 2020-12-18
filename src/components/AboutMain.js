import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

const timelineItems = [
  "Where I Was Born",
  "Where I Went To High School",
  "Where I Went To College",
  "Where I've Travelled To",
  "My Hobbies"
]

export default function ColorsTimeline() {
  const timelineData = [
    "Where I Was Born",
    "Where I Went To High School",
    "Where I Went To College",
    "Where I've Travelled To",
    "My Hobbies"
  ]
  const timelineItems = [];
  timelineData.forEach( (item) => {
    const indexOfItem = timelineData.indexOf(item);

    const color = indexOfItem% 2 === 0 ? "primary" : "grey"
    const connector = indexOfItem === timelineData.length -1 ? null : <TimelineConnector />

    timelineItems.push(
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={color}/>
          {/* <TimelineConnector /> */}
          {connector}
        </TimelineSeparator>
        <TimelineContent>{item}</TimelineContent>
      </TimelineItem>
    )
  })
  return (
    <Timeline align="alternate">
      {timelineItems}
    </Timeline>
  );
}
