import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import BookPage from "./pages/Bookshelf";
import NotFound from "./pages/NotFound";
import { Global } from "./styles/Global";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const trackingId = "UA-168791471-2";
ReactGA.initialize(trackingId, {
  debug: true,
  titleCase: false,
  siteSpeedSampleRate: 100
});


history.listen(function(location) {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pageview);
})


function App() {
  return (
    <Router history={history}>
      <Global />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/bookshelf" component={BookPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
