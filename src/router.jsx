import React from "react";
import { Switch, Route} from "react-router-dom";

import Home from "./pages/home";
import Table from "./pages/table";
import About from "./pages/about";
import More from "./pages/more";
import Catogery from "./pages/catogery";
import Simple from "./pages/simple";

const Routers=()=>{
return(
    <div>
<Switch>
    <Route path="/table">
        <Table/>
    </Route>
    <Route path="/about">
        <About/>
    </Route>
    <Route path="/more">
        <More />
    </Route>
    <Route path="/catogery">
        <Catogery />
    </Route>
    <Route path="/simple">
        <Simple />
    </Route>
    <Route path="/" exact={true}>
        <Home/>
    </Route>
</Switch>
    </div>)

}
export default Routers;