Precompile Handlebars templates for Ember.js

Modified for use in browserify asset pipeline

## Usage:

```
precompiler = require('emblem-precompile')()
compiledTemplate = precompiler(template);
anotherCompiledTemplate = precompiler(template2)
```

Template should be passed in as a buffer. For ex,
```
template = fs.readFileSync(templateFilename)
```
