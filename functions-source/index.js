var request = require("request"); // Include the request lib - run npm install request
var xml2js = require('xml2js');

exports.handler = function (event, context, callback) {
  var url = "https://medium.com/feed/@anshap1719";
  var parser = new xml2js.Parser();

  request(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      parser.parseString(body, function (err, result) {
        var main = {
          items: []
        };

        result.rss.channel[0].item.map(item => {
          var obj = {
            title: item.title[0],
            link: item.link[0],
            categories: item.category,
            date: item.pubDate[0],
            content: item['content:encoded'][0]
          };
          main.items.push(obj);
          return item;
        });

        callback(null, {
          statusCode: 200,
          body: JSON.stringify(main)
        });
      });
    }
  });
};


