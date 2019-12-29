import * as moment from 'moment';

export namespace Util {
  export function groupSummaries(reports: any) {
    const summaries = reports.map((report: any) => {
      const percentages = getPercentages(report);
      return { 
        id: report.id,
        date: moment(report.date),
        skipped: percentages.skipped,
        passed: percentages.passed
      }
    });

    const sortedSummaries = summaries.sort((a: any, b: any) => {
      if (a.date.isAfter(b.date)) {
        return -1 
      } else {
        return 1
      }
    });

    const groupedSummaries = sortedSummaries.reduce((memo: any, summary: any) => {
      const date = summary.date.format('MM/DD/YYYY');
      if (!memo[date]) {
        memo[date] = [];
      }
      memo[date].push(summary);
      return memo;
    }, {});

    return groupedSummaries;
  }

  export function getPercentages(report: any) {
    let total = 0;
    let totalSkipped = 0;
    let totalPassed = 0;

    for (let i = 0; i < report.features.length; i++) {
      for (let z = 0; z < report.features[i].elements.length; z++) {
        const scenario = report.features[i].elements[z];
        total += 1;
        if (isScenarioSkipped(scenario)) {
          totalSkipped += 1;
        } else if (isScenarioPassed(scenario)) {
          totalPassed += 1;
        }
      }
    }
    const percentPassed = Math.round(parseFloat(totalPassed.toString()) / parseFloat(total.toString()) * 100)
    const percentSkipped = Math.round(parseFloat(totalSkipped.toString()) / parseFloat(total.toString()) * 100)
    return {
      skipped: percentSkipped,
      passed: percentPassed
    }
  }
  
  export function isScenarioSkipped(scenario: any): boolean {
    return checkStatus(scenario, 'skipped');
  }

  export function isScenarioPassed(scenario: any): boolean {
    return checkStatus(scenario, 'passed');
  }

  export function isScenarioSkippedOrPassed(scenario: any): boolean {
    return scenario.steps.reduce((memo: any, step: any) => {
      return (memo && /skipped|passed/.test(step.result.status));
    }, true);
  }

  export function checkStatus(scenario: any, status: string) {
    return scenario.steps.reduce((memo: boolean, step: any) => {
      return (memo && step.result.status === status);
    }, true)
  }
}