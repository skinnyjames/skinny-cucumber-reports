# skinny-cucumber-reports

A react application for visualizing ruby cucumber reports

## install
```
git clone git@github.com:skinnyjames/skinny-cucumber-reports.git && cd skinny-cucumber-reports
npm i
npm run build
```
This will create a js file in `dist/` that you can use in your html.

## Formatter

This application needs some data that the ruby cucumber json formatter doesn't have
namely a unique id and a timestamp.  Put this formatter in env.rb

```ruby

module Skinny
  class Formatter < Cucumber::Formatter::Json
    def on_test_run_finished(_event)
    
     @feature_hashes = {
        features: @feature_hashes,
        uuid: UUID.generate,
        date: Time.now.strftime('%Y-%m-%d %H:%M')
      }
      @feature_hashes
    end
  end
end
```
Run with `cucumber -f Skinny::Formatter -o skinny-report.json`

This will create json data that you can feed into the report

In your html
```html
<script src="dist/index.js"></script>
<!-- at the end of the body -->
<script>
  SkinnyReports(jsonData);
</script>
```
