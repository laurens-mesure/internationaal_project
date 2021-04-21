import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Views
import Frontpage from "./Views/Frontpage";

// Components
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const App: React.FC = () => {
    return (
        <Router>
            <main className="flex flex-col min-h-screen dark:bg-dark">
                <Nav />
                <Switch>
                    <Route exact path="/" component={Frontpage} />
                </Switch>
                <Footer />
            </main>
        </Router>
    );
};

export default App;
