import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import BookPage from "./pages/Bookshelf";
import { Global } from "./styles/Global";


function App() {
  return (
    <Router>
      <Global />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/bookshelf" component={BookPage} />
      </Switch>
    </Router>
  );
}

export default App;
