import "./App.scss";
import Overwiev from "./components/Overview/Overview";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailedView from "./components/DetailedView/DetailedView";
import BrokenUrl from "./components/BrokenUrl/BrokenUrl";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Overwiev />
          </Route>
          <Route path="/laptop0">
            <DetailedView id={0} />
          </Route>
          <Route path="/laptop1">
            <DetailedView id={1} />
          </Route>
          <Route path="/laptop2">
            <DetailedView id={2} />
          </Route>
          <Route path="/laptop3">
            <DetailedView id={3} />
          </Route>
          <Route path="/laptop4">
            <DetailedView id={4} />
          </Route>
          <Route path="*">
            <BrokenUrl />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
