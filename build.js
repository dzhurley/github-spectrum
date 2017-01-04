var fs = require('fs');
var https = require('https');
var yaml = require('js-yaml');

var handle = function(body) {
    var json = yaml.safeLoad(body);
    var mapping = Object.keys(json)
        .filter(function(lang) {
            return json[lang].color;
        })
        .reduce(function(mapping, lang) {
            mapping[lang.toLowerCase()] = json[lang].color;
            (json[lang].aliases || []).forEach(alias => {
                mapping[alias.toLowerCase()] = json[lang].color;
            });
            return mapping;
        }, {});
    fs.writeFile(__dirname + '/spectrum.json', JSON.stringify(mapping));
};

https.get(
    'https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml',
    function(resp) {
        var body = '';
        resp.on('data', function(d) {
            body += d;
        });
        resp.on('end', function() {
            handle(body);
        });
    }
);
