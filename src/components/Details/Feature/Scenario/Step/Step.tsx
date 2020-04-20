import * as React from 'react';
import './Step.css';

export class Step extends React.Component<{ step: any }, {}> {
  
  stepStyle(): string {
    switch(this.props.step.result.status) {
      case 'passed':
        return 'rgb(201, 234, 182)'
        break;
      case 'skipped':
        return 'rgb(239, 235, 117)'
        break;
      default: 
        return 'rgb(255, 119, 146)'
    }
  }

  fullName() {
    return `${this.props.step.keyword} ${this.props.step.name}`
  }

  render() {
  
    return (
      <div className="step" style={{ borderLeft: `10px solid ${this.stepStyle()}` }}>
        <span className="step__name">{ this.fullName() }</span>
        <span className="step__status">{ this.props.step.result.status }</span>
      </div>
    );
  }
}