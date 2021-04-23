import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Views
import Frontpage from "./Views/Frontpage";
import Activity from "./Views/Activity";
import MailCheck from "./Views/MailCheck";

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
                    <Route exact path="/breaches" component={Activity} />
                    <Route exact path="/mailcheck" component={MailCheck} />
                </Switch>
                <Footer />
            </main>
        </Router>
    );
};

export default App;
