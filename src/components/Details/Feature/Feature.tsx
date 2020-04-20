import * as React from 'react';
import './Feature.css';
import { Scenario } from './Scenario/Scenario';
import { MdDescription } from 'react-icons/md'
export class Feature extends React.Component<{ feature: any, setErroredScenario: Function }, {}> {
  render() {
    let tags; 
    if (this.props.feature.tags) {
      tags =  this.props.feature.tags.map((tag: any) => (<span className="feature__information__name__tag"> { tag.name }</span>));
    }
    return (
      <div className="feature">
        <div className="feature__status">
          <MdDescription />
        </div>
        <div className="feature__information">
          <div className="feature__information__name">
            <h1>{ this.props.feature.name }</h1>
            { tags }
            <h3>{ this.props.feature.description }</h3>
            {
              this.props.feature.elements.map((scenario: any, index: number) => (
                <Scenario setErroredScenario={ this.props.setErroredScenario } 
                          scenario={ scenario } 
                          key={ index } />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}