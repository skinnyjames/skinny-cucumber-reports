import * as React from 'react';
import { SummaryItem } from './SummaryItem/SummaryItem';
import './Summary.css';

interface Summaries {
  [k: string]: Array<any>
}
export class Summary extends React.Component<{ activateSummaryGroup: Function, summaries: Summaries, activeSummaryGroup: any }, {}> {
  
  summaryGroupClass(summaryGroup: any) {
    const klass = ['summary__group'];
    if (this.isSummarySelected(summaryGroup)) {
      klass.push('summary__modal');
    }
    return klass.join(' ');
  }

  isSummarySelected(summaryGroup: any) {
    return JSON.stringify(this.props.activeSummaryGroup) == JSON.stringify(summaryGroup);
  }

  isSummaryClickable(summaryGroup: any) {
    return this.isSummarySelected(summaryGroup) || summaryGroup.length === 1;
  }

  toggleModal(summaryGroup: any) {
    if (this.isSummaryClickable(summaryGroup)) {
      this.props.activateSummaryGroup(null);
    } else {
      this.props.activateSummaryGroup(summaryGroup);
    }
  }

  render() {
    return(
      <div id="summary">
        <div id="summary__heading">
          <h1>Summary</h1>
        </div>
        <div id="summary__stage">
          {
            Object.keys(this.props.summaries).map((date: string) => {
              const groupedReports = this.props.summaries[date];
              return (
                <div onClick={ () => this.toggleModal(groupedReports) } key={ date } className={this.summaryGroupClass(groupedReports)}>
                  {
                    groupedReports.map((summary: any, index: number) => {
                      return (
                        <SummaryItem
                          id={ summary.id }
                          index={ index }
                          key={ summary.id }
                          date={ summary.date }
                          skipped={ summary.skipped }
                          passed={ summary.passed }
                        />
                      )
                    })
                  }
                </div>
              )
            })
          }
      </div>
    </div>
    );
  }
}