import * as React from "react";
import * as ReactDOM from 'react-dom';

import { SkinnyReports } from './components/SkinnyReports';

declare global {
  interface Window {
    SkinnyReports: Function,
  }
}

window.SkinnyReports = window.SkinnyReports || (function(reports: any) {

  reports = normalizeReports(reports);

  ReactDOM.render(
    <SkinnyReports reports={reports} />,
    document.getElementById('skinny-reports')
  );

  function normalizeReports(reports: any) {
    if (!(reports instanceof Array)) {
      reports = [reports];
    }

    reports = reports.filter((report: any) => !!report.features);
    return reports;
  }
});

