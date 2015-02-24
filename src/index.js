var fs = require('fs');
var path = require('path');
var vm = require('vm');
var context_ = require('./context');

// precompiler = require('emblem-precompile')()
// compiledTemplate = precompiler(template);
// anotherCompiledTemplate = precompiler(template2);
module.exports = function (options) {

  var context = context_.getContext(
  {
      // need Buffer
      Buffer: Buffer,

      // handlebars template to compile
      template: null,

      // compiled handlebars template
      templatejs: null
  });

  // return a function that can compile templates
  return function(template) { // template is passed in as a buffer

    // need to stringify buffer to pass it in as a string, and then parse it and make it a buffer on the other side
    vm.runInContext("template = new Buffer(JSON.parse('" + JSON.stringify(template) + "'));", context)

    vm.runInContext('templatejs = Emblem.precompile(Ember.Handlebars, template).toString()', context)
    // extract the compiled template from the vm context and return it
    return context.templatejs;
  }

}

module.exports.context = context_;
module.exports.render = require('./render');
