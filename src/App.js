import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";
import { Global } from "./styles/Global";

function App() {
  return (
      <Router>
        <Global/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={ ProjectsPage } />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </Router>
  );
}

export default App;
