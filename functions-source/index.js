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
            title: item.title,
            link: item.link,
            categories: item.category,
            data: item.pubDate,
            content: item['content:encoded']
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


