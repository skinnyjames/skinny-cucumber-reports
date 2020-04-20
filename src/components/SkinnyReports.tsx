import * as React from "react";
import './SkinnyReports.css'
import { Menu } from './Menu/Menu';
import { Summary } from './Summary/Summary';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Util } from '../util/util';
import 'typeface-open-sans';
import { Details } from "./Details/Details";

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
      <HashRouter>
        <div id="skinny__reports">
          <Menu />
          <div id="skinny__reports__stage">
            <Switch>
              <Route path="/details/:id" render={(props) => {
                const reportProp = this.props.reports.find((reportMatch: any) => (
                  reportMatch.id === props.match.params.id)
                )
                return <Details report={ reportProp } />
              }} />
              <Route path="/">
                <Summary 
                  activateSummaryGroup={this.setActiveSummary.bind(this)}
                  activeSummaryGroup={this.getActiveSummary()}
                  summaries={ Util.groupSummaries(this.props.reports) } 
                />
              </Route>
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}