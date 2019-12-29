import * as React from "react";
import './SkinnyReports.css'
import { Menu } from './Menu/Menu';
import { Summary } from './Summary/Summary';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Util } from '../util/util';
import 'typeface-open-sans';

export class SkinnyReports extends React.Component<{ reports: any }, { activeSummary: any }>{
  constructor(props: any) {
    super(props);
    this.state = { 
      activeSummary: null,
    }
  }

  setActiveSummary(summaryItem: any) {
    this.setState({ activeSummary: summaryItem });
  }

  getActiveSummary() {
    return this.state.activeSummary;
  }

  render() {
    return(
      <Router>
        <div id="skinny__reports">
          <Menu />
          <div id="skinny__reports__stage">
            <Switch>
              <Route path="/">
                <Summary 
                  activateSummaryGroup={this.setActiveSummary.bind(this)}
                  activeSummaryGroup={this.getActiveSummary() }
                  summaries={ Util.groupSummaries(this.props.reports) } 
                />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}