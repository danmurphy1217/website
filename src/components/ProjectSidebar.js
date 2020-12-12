import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SidebarWith from "./extras/buildProjectSidebar";

const items = [
  {
    companyName: "Stacauto",
    projects: [
      {
        slug: "backend-api",
        label: "Live Backend API"
      },
      {
        slug: "mysql-db-setup",
        label: "MySQL Design and Implementation"
      },
      {
        slug: "shopify-dynamic-inventory",
        label: "Ruby Lambda Function for Shopify Inventory"
      },
    ],
  },
  {
    companyName: "Pathstream",
    projects: [
      {
        slug: "mysql-course-review",
        label: "MySQL Course Review"
      },
      {
        slug: "python-for-data-analysis",
        label: "Python For Data Analysis Course"
      },
      {
        slug: "stats-course-review",
        label: "Statistics Course Review"
      },
      {
        slug: "unity-course-update",
        label: "Unity Course Update"
      }
    ]
  },
  {
    companyName: "Wilbur Labs",
    projects: [
      {
        slug: "traffic-analyzer",
        label: "Traffic Analyzer"
      },
      {
        slug: "api-business-dev",
        label: "API Market Research"
      }
    ]
  },
  {
    companyName: "Jam",
    projects: [
      {
        slug: "network-graph",
        label: "UBS Network Graph"
      },
      {
        slug: "matching-algorithm",
        label: "Matching Algorithm"
      }
    ]
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
