var hexToRgba = require('hex-and-rgba').hexToRgba;
var spectrum = require('./spectrum.json');

var rgbaString = function(rgbaArray) {
    return 'rgba(' + rgbaArray[0] + ',' + rgbaArray[1] + ',' + rgbaArray[2] + ',' + rgbaArray[3] + ')';
};

module.exports = function(language, type) {
    var lowerLang = language.toLowerCase();
    // github repo pages default languages to #ccc
    var color = lowerLang in spectrum ? spectrum[lowerLang] : '#cccccc';
    return type === 'rgba' ? rgbaString(hexToRgba(color)) : color;
};
