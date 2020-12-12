import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";
import SidebarWith from "./components/extras/buildProjectSidebar";
import { Global } from "./styles/Global";

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

function App() {
  return (
    <div>
      <Router>
        <Global/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={ ProjectsPage } />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
