var fs = require('fs');
var path = require('path');
var vm = require('vm');
var context_ = require('./context');

module.exports = function (template, options) {

  var context = context_.getContext({
    // handlebars template to compile
    template: template,

    // compiled handlebars template
    templatejs: null
  });

  // compile the handlebars template inside the vm context
  vm.runInContext('templatejs = Ember.Handlebars.precompile(template).toString()', context)

  // extract the compiled template from the vm context and return it
  return context.templatejs;
}

module.exports.context = context_;
module.exports.render = require('./render');
