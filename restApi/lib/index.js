/**
 * Lib
 */
// Single - All
module.exports.singleAll = function(event, cb) {

  console.log(event.text);

  var response = {
    message: 'Your Serverless function ran successfully via the \''
    + event.httpMethod
    + '\' method!'
  };

  db.put('users', 'kates-user-id', {
    "name": "Kate Robbins",
    "hometown": "Portland, OR",
    "twitter": "@katesfaketwitter"
  })
  .then(function (res) {
    cb(null, res);
  })
  .fail(function (err) {
    cb(err, null);
  });
};

// Multi - Create
module.exports.multiCreate = function(event, cb) {

  var response = {
    message: 'Your Serverless function \'multi/create\' ran successfully!'
  };

  return cb(null, response);
};

// Multi - Show
module.exports.multiShow = function(event, cb) {

  var response = {
    message: 'Your Serverless function \'multi/show\' ran successfully with the following ID \'' + event.pathId + '\'!'
  };

  return cb(null, response);
};
