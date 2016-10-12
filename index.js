var hexToRgba = require('hex-and-rgba').hexToRgba;
var spectrum = require('./spectrum.json');

var rgbaString = function(rgbaArray) {
    return 'rgba(' + rgbaArray[0] + ',' + rgbaArray[1] + ',' + rgbaArray[2] + ',' + rgbaArray[3] + ')';
};

module.exports = function(language, type) {
    if (!(language in spectrum)) {
        return '';
    }
    return type === 'rgba' ?
        rgbaString(hexToRgba(spectrum[language])) :
        spectrum[language];
};
