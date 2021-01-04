import {SiPython} from "react-icons/si";
import {SiAmazonaws} from "react-icons/si"
import {SiRubygems} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {SiGooglecloud} from "react-icons/si"
import {GrMysql} from "react-icons/gr"

const AboutMeIcons = () => {
    return (
        <div style={{width: "50%"}}>
            <h1 style={{textAlign: "center"}}>Skills</h1>
            <div style={{display: "flex", justifyContent: "space-between",  margin: "1em 0", flexWrap: "wrap"}}>
                <div>
                    <SiPython size={40}/>
                    <p>Python</p>
                </div>
                <div>
                    <SiAmazonaws size={40}/>
                    <p>AWS</p>
                </div>
                <div>
                    <SiRubygems size={40}/>
                    <p>Ruby</p>
                </div>
                <div>
                    <SiJavascript size={40}/>
                    <p>JS</p>
                </div>
                <div>
                    <SiGooglecloud size={40}/>
                    <p>GCP</p>
                </div>
                <div>
                    <GrMysql size={40}/>
                    <p>MySQL</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMeIcons;