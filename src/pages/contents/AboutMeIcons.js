import { SiPython } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiRubygems } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const AboutMeIcons = () => {
  return (
    <div style={{ width: "50%" }}>
      <h1 style={{ textAlign: "center" }}>Skills</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1em 0",
          flexWrap: "wrap",
        }}
      >
        <SiPython size={40} />
        <SiAmazonaws size={40} />
        <SiRubygems size={40} />

        <SiJavascript size={40} />
        <SiGooglecloud size={40} />
        <GrMysql size={40} />
      </div>
    </div>
  );
};

export default AboutMeIcons;
