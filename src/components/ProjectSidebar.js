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
          description: "A robust Backend API build to support Stacauto's frontend. This API has 6 endpoints that unlock access to all aspects of our data ranging from vehicle-specific information such as Make, Model, VIN, and Exterior and Interior Color to Dealer-specific information such as the Dealer ID, Address, and more.",
          techStack: ["Python", "Django", "MySQL", "Apache", "AWS EC2"],
          projectRequirements: ["RESTful API", "Endpoint that returns all unique Object Equipment Manufacturers (Makes)", "Endpoint that accepts the Make as a parameter and returns all models matching that make", "Endpoint that accepts the Make and Model as parameters and returns all matching vehicles", "Endpoint that accepts the VIN as a parameter and returns the one matching vehicle", "Endpoint that accepts a payload pertaining to a test drive submission and sends it to a MySQL database", "Robust error handling for errant submission and payload information"],
          problemsSolved: ["Deploying with Apache on Ubuntu 18.04", "CORS and CSRF Best Practices", "How to allow AWS Services to communicate with one another (specifically s3 -> ec2 -> rds)", "popular forms of authentication, specifically OAuth2 and JWT", "Sentry configuration for Django"],
        },
      },
      {
        slug: "mysql-db-setup",
        label: "MySQL Design and Implementation",
        meta: {
          description: "I designed and built the development and production databases that stored information on our dealer partners, test drivers, and vehicle inventory. This included a pipeline built with Python and MySQL that updated inventory each day, tracked test drives, and stored meta-data. Additionally, I was in charge of creating users and providing employees with credentials.",
          techStack: ["MySQL", "Python", "AWS RDS", "AWS S3", "AWS Cloudwatch (Logs)"],
          projectRequirements: ["Reliable pipeline with intuitive logging", "Quick concurrent transactions"],
          problemsSolved: ["Configuring users and permissions for a database", "Diagramming and building a production-level database", "How to setup and manage a database with RDS"],
        },
      },
      {
        slug: "shopify-dynamic-inventory",
        label: "Ruby Lambda Function for Shopify Inventory",
        meta: {
          description: "I designed an AWS Lambda function that reads data from a CSV, adds new vehicles to the Stacauto Shopify site, deletes sold vehicles from the Stacauto Shopify site, and updates any vehicles whose information has changed.",
          techStack: ["Ruby", "AWS Lambda", "AWS Cloudwatch (Logs)"],
          projectRequirements: ["Asynchronous insertion of vehicle data into Shopify", "Reliable pipeline with intuitive logging", "Time and Cost sensitive"],
          problemsSolved: ["Setting up AWS Lambda function", "Setting up continuous integration between GitHub and AWS S3", "Sentry configuration for Ruby 2.7"],
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
          description: "Edited and reviewed core components of the MySQL data analysis course including knowledge checks, module reviews, and project model answers",
          techStack: ["MySQL"],
          projectRequirements: ["Validate project answers and knowledge checks"],
          problemsSolved: [""],
        },
      },
      {
        slug: "python-for-data-analysis",
        label: "Python For Data Analysis Course",
        meta: {
          description: "Helped design, write, and review the course prior to its release in early 2021. This includes writing lessons and performing technical reviews",
          techStack: ["Python, Matplotlin, Numpy, Pandas"],
          projectRequirements: ["Design and implement a course that traches core concepts of data analysis with the Python programming language"],
          problemsSolved: [""],
        },
      },
      {
        slug: "stats-course-review",
        label: "Statistics Course Review",
        meta: {
          description: "",
          techStack: [""],
          projectRequirements: [[""]],
          problemsSolved: [""],
        },
      },
      {
        slug: "unity-course-update",
        label: "Unity Course Update",
        meta: {
          description: "",
          techStack: [""],
          projectRequirements: [""],
          problemsSolved: [""],
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
          description: "",
          techStack: [""],
          projectRequirements: [""],
          problemsSolved: [""],
        },
      },
      {
        slug: "api-business-dev",
        label: "API Market Research",
        meta: {
          description: "",
          techStack: [""],
          projectRequirements: [""],
          problemsSolved: [""],
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
          description: "",
          techStack: [""],
          projectRequirements: [""],
          problemsSolved: [""],
        },
      },
      {
        slug: "matching-algorithm",
        label: "Matching Algorithm",
        meta: {
          description: "",
          techStack: [""],
          projectRequirements: [""],
          problemsSolved: [""],
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
  padding-bottom: 225px;
`;

const ProjectSidebar = () => {
  return (
    <Root>
      <MainCard>
        <SidebarWith companyDetails={items} />
      </MainCard>
    </Root>
  );
};

export default ProjectSidebar;
