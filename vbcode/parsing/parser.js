var cheerio = require('cheerio');
var request = require('request');

module.exports = {
  parse: function(url) {
      request(url, function(err, res, body) {
          if(err) { console.log(err); }
          else {
              var body = cheerio.load(body);
          }
      });
  }
};