import React from "react";
import { Switch,Route} from 'react-router-dom'

function App() {
  return <Switch>
    <Route exact path = "/">THis is homepage</Route>
    <Route exact path = "/starred">THis is starred</Route>
    <Route>This is 404 page</Route>
  </Switch>;
}

export default App;
