import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:slug" component={Details} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
