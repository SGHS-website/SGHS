import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SettingsPage from "./settings";
import PermanentPage from "./permanent";
import AutonomousPage from "./autonomous";
import ClubPage from "./club";
import HomePage from "./home";
import StudentPage from "./student";
import CourtPage from "./court"
import CouncilPage from "./council"
import CongressPage from "./congress"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/club/autonomous">
          <AutonomousPage />
        </Route>
        <Route path="/club/permanent">
          <PermanentPage />
        </Route>
        <Route path="/club">
          <ClubPage />
        </Route>
        <Route path="/student/congress">
          <CongressPage />
        </Route>
        <Route path="/student/court">
          <CourtPage />
        </Route>
        <Route path="/student/council">
          <CourtPage />
        </Route>
        <Route path="/student">
          <StudentPage />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
