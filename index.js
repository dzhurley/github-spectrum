var color2color = require('colorcolor');
var spectrum = require('./spectrum.json');

module.exports = function(language, type, calculateOpacity) {
    return language in spectrum ?
        color2color(
            spectrum[language],
            type || 'hex',
            calculateOpacity || false
        ) :
        '';
};
