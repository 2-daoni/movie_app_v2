import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";

function App(){
  return <HashRouter>
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
  </HashRouter>
}

export default App;