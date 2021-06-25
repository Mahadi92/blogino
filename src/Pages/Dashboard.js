import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import ManagePost from '../components/ManagePost/ManagePost';
import Sidebar from '../components/Sidebar/Sidebar';

const Dashboard = () => {

    let { path } = useRouteMatch();

    return (
        <Router>
            <section className="grid grid-cols-12 gap-1 pt-20">
                <div className="col-span-3">
                    <Switch>
                        <Sidebar />
                    </Switch>
                </div>
                <div className="col-span-9">
                    <Switch>
                        <Route path={`/dashboard/managePost`}>
                            <ManagePost />
                        </Route>
                    </Switch>
                </div>
            </section>
        </Router>
    );
};

export default Dashboard;