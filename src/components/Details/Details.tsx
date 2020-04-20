import * as React from 'react';
import * as moment from 'moment';
import './Details.css';
import { Feature } from './Feature/Feature'
import { DamageReport } from './DamageReport/DamageReport';

export class Details extends React.Component<{ report: any }, { erroredScenario: any }> {
  
  constructor(props: any) {
    super(props);
    this.state = { 
      erroredScenario: null,
    }
  }

  setErroredScenario(scenario: any) {
    this.setState({ erroredScenario: scenario });
  }

  reportDate() {
    return moment(this.props.report.date).format('MM/DD/YYYY @ hh:mm A');
  }

  render() {
    let damageReport;
    if (this.state.erroredScenario) {
      damageReport = <DamageReport setErroredScenario={ this.setErroredScenario.bind(this) } scenario={ this.state.erroredScenario } />
    }
    return (
      <div className="details">
        <div className="details__timestamp">{ this.reportDate() }</div>
        <div className="details__features">
           { 
              this.props.report.features.map((feature: any, index: number) => 
                (<Feature key={ index } setErroredScenario={ this.setErroredScenario.bind(this) } feature={ feature } />))
            }
        </div>
        { damageReport }
      </div>
    );
  }
}