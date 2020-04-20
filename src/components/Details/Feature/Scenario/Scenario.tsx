import * as React from 'react';
import './Scenario.css';
import { Step } from './Step/Step';
import { MdCheckCircle, MdRemoveCircle } from 'react-icons/md';
import { Util } from '../../../../util/util';

export class Scenario extends React.Component<{ scenario: any, setErroredScenario: Function }, {}> {
  passed(): boolean {
    return Util.passed(this.props.scenario);
  }

  skipped(): boolean {
    return Util.skipped(this.props.scenario);
  }

  scenarioIcon() {
    if (this.passed()) {
      return(
        <div className="scenario__info--passed">
          <MdCheckCircle />
        </div>
      )
    }else if(this.skipped()) {
      return( 
        <div className="scenario__info--skipped">
          <MdRemoveCircle />
        </div>
      )
    } else {
      return (
        <div className="scenario__info--failed">
          <MdRemoveCircle />
        </div>
      )
    }
  }


  render() {
    let errorDiv;
    if( !this.skipped() && !this.passed() ) {
      errorDiv = (<div onClick={() => { this.props.setErroredScenario(this.props.scenario) }}
                       className="scenario__errored"></div>)
    }
    return (
      <div className="scenario">
        <div className="scenario__info">
          { this.scenarioIcon() }
        </div>
        <div className="scenario__name" style={{ position: 'relative' }}>
          { errorDiv }
          <h2>{ this.props.scenario.keyword }: { this.props.scenario.name }</h2>
          { 
            this.props.scenario.steps.map((step: any, index: number) => ( <Step key={ index } step={ step } />))
          }
        </div>
      </div>
    )
  }
}