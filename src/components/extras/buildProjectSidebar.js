import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function SidebarWith({ companyDetails }) {
  return (
    <List>
      {companyDetails.map((projectInformation) => (
        <ListItem key={projectInformation.name} button>
          <ListItemText>
            {projectInformation.name}
            <ListItemText>
            {projectInformation.label}
            </ListItemText>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}

export default SidebarWith;