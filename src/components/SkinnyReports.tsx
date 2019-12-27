import * as React from "react";
import './SkinnyReports.css'
import { Menu } from './Menu/Menu';
import { Summary } from './Summary/Summary';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export class SkinnyReports extends React.Component {
  render() {
    return(
      <Router>
        <div id="skinny__reports">
          <Menu />
          <div id="skinny__reports__stage">
            <Switch>
              <Route path="/">
                <Summary />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>

    );
  }
}