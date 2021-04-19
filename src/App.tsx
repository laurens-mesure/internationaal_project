import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Views
import Frontpage from "./Views/Frontpage";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Frontpage} />
            </Switch>
        </Router>
    );
};

export default App;
