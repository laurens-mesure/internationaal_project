import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Views
import Frontpage from "./Views/Frontpage";
import Activity from "./Views/Activity";

// Components
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const App: React.FC = () => {
    return (
        <Router>
            <main className="flex flex-col min-h-screen">
                <Nav />
                <Switch>
                    <Route exact path="/" component={Frontpage} />
                    <Route exact path="/activity" component={Activity} />
                </Switch>
                <Footer />
            </main>
        </Router>
    );
};

export default App;
