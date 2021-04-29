import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeBos from "./screens/HomeBos";
import HomeEng from "./screens/HomeEng";

function App() {
  return (
    <Fragment>
      <Route
        render={() => (
          <Switch>
            <Route exact path='/' component={HomeBos} />
            <Route exact path='/eng' component={HomeEng} />
          </Switch>
        )}
      />
    </Fragment>
  );
}

export default App;
