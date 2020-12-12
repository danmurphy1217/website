import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import SidebarWith from './extras/buildProjectSidebar';

const items = [
  {
    name: "Stacauto",
    label: "Backend API",
  },
  {
    name: "Stacauto",
    label: "Shopify Lambda Function"
  },
  {
    name: "Pathstream",
    label: "Python Data Analysis"
  }
]

// const mapssss = items.map((projectInformation) => {
//   return projectInformation;
// });
// console.log(mapssss);

const Root = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const MainCard = styled.div`
  width: auto;
  padding-bottom: 225px;
`;

const PlainText = styled.header`
  color: #c8c8c8;
  font-size: 60px;
  padding-top: 150px;
`;

const ProjectSidebar = ( { items } ) => {
  return (
    <SidebarWith companyDetails={items}/>
  );
};

export default ProjectSidebar;