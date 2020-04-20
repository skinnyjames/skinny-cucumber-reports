import * as React from 'react';
import { Embedding } from './Embedding/Embedding';
import { Util } from '../../../util/util';
import './DamageReport.css';

export class DamageReport extends React.Component<{ scenario: any, setErroredScenario: Function }, {}> {
  erroredStep() {
    return Util.erroredStep(this.props.scenario);
  }
  embeds() {
    return Util.getEmbeds(this.props.scenario);
  }

  errorMessage() {
    if (this.erroredStep().result && this.erroredStep().result.error_message) {
      return this.erroredStep().result.error_message;
    } else {
      return "No Errors Logged."
    }
  }

  render() {
    return (
      <div id="damage-report__container" onClick={ () => {this.props.setErroredScenario(null) } }>
        <div id="damage-report">
          <div id="damage-report__details">
            <h1>Damage Report</h1>
            <pre className="damage-report__details__error">{ this.errorMessage() }</pre>
            { this.embeds().map((embed, index: number) => <Embedding key={ index } embedding={ embed } />) }
          </div>
        </div>
      </div>
    )
  }
}
