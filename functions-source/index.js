var request = require("request"); // Include the request lib - run npm install request

exports.handler = function (event, context, callback) {
  callback = context.done;

  console.log(callback);

  var username = 'anshap1719';
  var url = "https://medium.com/@" + username + "/latest?format=json";

  request(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var jsonBody = JSON.parse(body.replace('])}while(1);</x>', ''));
      console.log(jsonBody);
      callback(null, {
        statusCode: 200,
        body: jsonBody
      });
    }
  });
};
