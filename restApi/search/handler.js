'use strict';

/**
 * Serverless Module: Lambda Handler
 * - Your lambda functions should be a thin wrapper around your own separate
 * modules, to keep your code testable, reusable and AWS independent
 * - 'serverless-helpers-js' module is required for Serverless ENV var support.  Hopefully, AWS will add ENV support to Lambda soon :)
 */

// Require Logic
var db = require('orchestrate')('77c5a75f-0de8-46ba-982a-5d99af68220a')

// Lambda Handler
module.exports.handler = function(event, context) {

  console.log(event)

  db.search('notes', event.search)
  .then(function (res) {
    context.done(null, res);
  })
  .fail(function (err) {
    context.done(err, null);
  });

};
