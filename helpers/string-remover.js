function removestring(str) {
    var newstring = str.replace('(uczeń  )', '');
    return newstring;
}

module.exports = { removestring };