import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SidebarWith from "./extras/buildProjectSidebar";

const items = [
  {
    companyName: "Stacauto",
    projects: [
      {
        slug: "backend-api",
        label: "Live Backend API",
        meta: {
          description:
            "I designed and built a robust Backend API to support Stacauto's frontend UX. This API has 6 endpoints that unlock access to all aspects of our database ranging from vehicle-specific information such as Make, Model, VIN, and Exterior and Interior Color to Dealer-specific information such as the Dealer ID, Address, and more.",
          techStack: [
            "Python",
            "Django",
            "MySQL",
            "Apache",
            "AWS EC2",
            "CRON",
            "Sentry",
          ],
          projectRequirements: [
            "RESTful API",
            "Endpoint that returns all unique Object Equipment Manufacturers (Makes)",
            "Endpoint that accepts the Make as a parameter and returns all models matching that make",
            "Endpoint that accepts the Make and Model as parameters and returns all matching vehicles",
            "Endpoint that accepts the VIN as a parameter and returns the one matching vehicle",
            "Endpoint that accepts a payload pertaining to a test drive submission and sends it to a MySQL database",
            "Error handling for errant submission and payload information",
          ],
          problemsSolved: [
            "Deployed with Apache on Ubuntu 18.04",
            "Learned CORS and CSRF Best Practices",
            "Allowed AWS Services to communicate with one another (specifically s3, ec2, rds)",
            "Learned about popular forms of authentication, specifically OAuth2 and JWT",
            "Configured Sentry for Django",
          ],
          video: "https://s3.amazonaws.com/www.dan-murphy.com/public/Stac-API-Demo.mp4"
        },
      },
      {
        slug: "mysql-db-setup",
        label: "MySQL Design and Implementation",
        meta: {
          description:
            "I designed and built the development and production databases that stored information about our dealer partners, test drivers, and vehicle inventory. This includes a pipeline built with Python and MySQL that updated inventory each day, tracked test drives, and stored meta-data about our core businesses (test drives and dealer partnerships). Additionally, I was in charge of creating users and providing employees with credentials to access the database.",
          techStack: [
            "MySQL",
            "Python",
            "AWS RDS",
            "AWS S3",
            "AWS Cloudwatch (Logs)",
          ],
          projectRequirements: [
            "Reliable pipeline with intuitive logging",
            "Quick concurrent transactions",
          ],
          problemsSolved: [
            "Configured users and permissions for a database",
            "Diagrammed and built a production-ready database",
            "Set up and managed a database with RDS",
          ],
          image: "https://s3.amazonaws.com/www.dan-murphy.com/public/db-schema-inventory.png"
        },
      },
      {
        slug: "shopify-dynamic-inventory",
        label: "Ruby Lambda Function for Shopify Inventory",
        meta: {
          description:
            "I designed an AWS Lambda function that reads data from a CSV, adds new vehicles to the Stacauto Shopify site, deletes sold vehicles from the Stacauto Shopify site, and updates any vehicles whose information has changed.",
          techStack: [
            "Ruby",
            "AWS Lambda",
            "AWS Cloudwatch (Logs)",
            "CRON",
            "Sentry",
          ],
          projectRequirements: [
            "Asynchronous insertion of vehicle data into Shopify",
            "Reliable pipeline with intuitive logging",
            "Time and Cost sensitive",
          ],
          problemsSolved: [
            "Set up AWS Lambda function",
            "Set up continuous integration between GitHub and AWS S3",
            "Configured Sentry for Ruby 2.7",
          ],
          image: "https://s3.amazonaws.com/www.dan-murphy.com/public/Shopify+Live+Inventory.png"
        },
      },
      {
        slug: "vendor-integrations",
        label: "Vendor Integrations",
        meta: {
          description:
            "I was in charge of integrating data from various third-party vendors, such as Dealer Inspire and vAuto. Since each vendor supported different methods for transferring files, I leveraged both AWS S3 and AWS Transfer.",
          techStack: [
            "AWS Transfer",
            "AWS S3",
            "AWS Cloudwatch (Logs)",
            "AWS Secrets Manager",
            "CRON",
          ],
          projectRequirements: [
            "Provided reliable file delivery for each third-party vendor",
            "Provided seamless integration into our vendors current infrastructure",
            "Implemented a time and cost effective solution",
          ],
          problemsSolved: [
            "Set up SFTP with AWS Transfer",
            "Stored Secret values in AWS Secrets Manager and allowed AWS Lambda to pull from AWS Secrets",
            "Configured Public-private keys for access to the SFTP server",
          ],
          image: "https://s3.amazonaws.com/www.dan-murphy.com/public/Vendor+Integrations.png"
        },
      },
    ],
  },
  {
    companyName: "Pathstream",
    projects: [
      {
        slug: "mysql-course-review",
        label: "MySQL Course Review",
        meta: {
          description:
            "Edited and reviewed core components of the MySQL Data Analysis course. This included writing and reviewing knowledge checks, module reviews, and project model answers",
          techStack: ["MySQL"],
          projectRequirements: [
            "Validate project answers and knowledge checks",
          ],
          problemsSolved: ["Learned about the Pathstream platform and made my first significant contributions to the LXD Data Team"],
        },
      },
      {
        slug: "python-for-data-analysis",
        label: "Python For Data Analysis Course",
        meta: {
          description:
            "Helped design, write, and review the course prior to its release in early 2021. This includes writing lessons on NumPy, Docstrings and documentation standards, and for loops, and performing technical reviews, amongst other things.",
          techStack: [
            "Python (core packages utilized include Matplotlib, NumPy, Pandas)",
          ],
          projectRequirements: [
            "Design and implement a course that teaches core concepts of data analysis with the Python programming language",
          ],
          problemsSolved: [
            "Decomposed complex concepts into comprehensible lesson plans",
            "Used Python testing frameworks such as Unit test and Pytest to write test cases for lessons and activities",
          ],
        },
      },
      {
        slug: "unity-course-update",
        label: "Unity Course Update",
        meta: {
          description:
            "Reviewed and updated the Unity Courses from Unity version 2018.4 to 2019. Core tasks included updating lessons and lesson content such as projects and labs.",
          techStack: ["Unity 2019.4", "Unity 2018.X"],
          projectRequirements: [
            "Update outdated lesson material",
            "Validate the steps outlined in projects and lessons and, if necessary, update them.",
          ],
          problemsSolved: ["Better acquainted with Unity"],
        },
      },
    ],
  },
  {
    companyName: "Wilbur Labs",
    projects: [
      {
        slug: "traffic-analyzer",
        label: "Traffic Analyzer",
        meta: {
          description:
            "A web application that accepts a list of URLs, retrieves information regarding their web traffic, and adds it to a Google Sheet.",
          techStack: [
            "Python",
            "Flask",
            "Docker",
            "Google Cloud Run",
            "GitHub Actions (CI/CD w/ GCP)",
          ],
          projectRequirements: [
            "Simple and intuitive user interface",
            "Quick and reliable process",
            "Authentication which only allows Wilbur Labs employees to access the web application",
          ],
          problemsSolved: [
            "Deployed with Google Cloud Run",
            "Built an intuitive application interface that users understand and enjoy using",
            "Decreased the time taken for market research from hours to minutes.",
          ],
          video: "https://s3.amazonaws.com/www.dan-murphy.com/public/WL-Demo.mp4"
        },
      },
    ],
  },
  {
    companyName: "Jam",
    projects: [
      {
        slug: "network-graph",
        label: "UBS Network Graph",
        meta: {
          description:
            "I built a Network Graph using R and Shiny Dashboard that maps out all of the Jammer connections for users at UBS. This dashboard maps out over 2000 unique connections across nearly 200 active users.",
          techStack: [
            "R",
            "Shiny Dashboard",
            "CRON",
            "Airtable API",
            "Ubuntu 18.04",
            "AWS EC2",
          ],
          projectRequirements: [
            "Each node must have an image which represents the user",
            "Robust filtering for Name, Skills, Seniority, Team, and Office Location",
            "Jammer Leaderboard which highlights the most active jammers at UBS",
          ],
          problemsSolved: [
            "Reliably structured data so that the network graph updated dynamically after each meetup",
            "Utilized CRON to automatically run tasks at specified times",
            "Setup Shiny Server with Nginx",
          ],
          video: "https://s3.amazonaws.com/www.dan-murphy.com/public/JamGraph.mp4"
        },
      },
      {
        slug: "matching-algorithm",
        label: "Matching Algorithm",
        meta: {
          description:
            "As the lead engineer at Jam, I was in sole charge of our internal matching algorithm. Core tasks in this role included algorithm upkeep, documentation, writing unit tests, adding additional criteria for the matching algorithm, and modularizing the application.",
          techStack: ["Python", "CI with Gitlab", "Airtable API", "Azure"],
          projectRequirements: [
            "Handling any and all errors that may arise",
            "Keeping code well-documented and well-tested to ensure the highest quality and best experience for our users",
          ],
          problemsSolved: [
            "Setup continuous integration with Gitlab",
            "Utilized dataclasses to store data in a Pythonic manner",
          ],
          image: "https://s3.amazonaws.com/www.dan-murphy.com/public/JAM_+Match+Algorithm.png"
        },
      },
    ],
  },
  {
    companyName: "Western Sustainability Exchange",
    projects: [
      {
        slug: "ranch-assessment-tool",
        label: "Regenerative Agriculture Assessment Tool",
        meta: {
          description:
            "The Western Sustainability Exchange needed an update to their in-house assessment tool, and I was licensed as the sole developer to build a robust backend API that retrieved a ranches assessment responses from Airtable, performed scoring logic, and built a PDF that outlined core insights. Additionally, I then programmatically updated data in Airtable with the public AWS S3 link to the PDF and send the respondent an email with the PDF attached.",
          techStack: [
            "Python",
            "Flask",
            "Airtable API",
            "Docker",
            "GitHub CI/CD with Docker",
            "AWS S3",
            "Sentry",
          ],
          projectRequirements: [
            "Reliable delivery of emails to respondents",
            "Quick derivation of complex scoring logic",
            "Robust unit tests",
            "Well-documented code",
          ],
          problemsSolved: [
            "Deployed a Flask application with Docker",
            "Built a PDF with Python",
            "Provided respondents with data-driven insights",
          ],
          image: "https://s3.amazonaws.com/www.dan-murphy.com/public/WSE+Flow.png"
        },
      },
    ],
  },
];

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const MainCard = styled.div`
  width: auto;
  background-color: #E6E6E6;
`;

const ProjectSidebar = () => {
  return (
      <Root style={{ marginBottom: "50px"}}>
        <MainCard>
          <SidebarWith companyDetails={items} />
        </MainCard>
      </Root>
  );
};

export default ProjectSidebar;
