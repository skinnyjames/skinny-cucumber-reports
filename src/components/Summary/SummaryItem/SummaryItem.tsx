import * as React from 'react';
import './SummaryItem.css';
import moment = require('moment');

interface SummaryItemProps {
  id: string;
  key: string;
  skipped: number;
  passed: number;
  index: number;
  date: moment.Moment;
}
export class SummaryItem extends React.Component<SummaryItemProps, {}> {
  render() {
    return(
      <div className="summary__item" style={ this.summaryItemStyle() }>
        <div style={{ height: this.percentSkipped() }} className="summary__item__percent--skipped"></div>
        <div style={{ height: this.percentPassed() }} className="summary__item__percent--passed"></div>
        <div className="summary__item__date">
          <span className="summary__item__date__month">{ this.month() }</span>
          <span className="summary__item__date__day">{ this.day() }</span>
          <span className="summary__item__date__year">{ this.year() } </span>
        </div>
      </div>
    );
  }

  percentPassed() {
    return `${this.props.passed.toString()}%`;
  }

  percentSkipped() {
    return `${this.props.skipped.toString()}%`;
  }

  summaryItemStyle() {
    return {
      'zIndex': -Math.abs(this.props.index),
      'marginLeft': this.props.index === 0 ? '0px' : '-180px',
      'transition': 'z-index 0s, margin .3s'
    }
  }

  year() {
    return this.props.date.format('YYYY');
  }

  day() {
    return this.props.date.format('DD');
  }

  month() {
    return this.props.date.format('MMM');
  }
}