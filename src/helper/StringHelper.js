/*
    exceptions: Array
 */
String.prototype.capitalizeFirstLetter = function (exceptions) {

    var str = this.split(' ');

    for (var i = 0; i < str.length; i++){

        if (exceptions.indexOf(str[i]) != -1) {
            continue;
        }

        str[i] = str[i].split('');
        str[i][0] = str[i][0].toUpperCase();
        str[i] = str[i].join('');
    }

    return str.join(' ');
};

/*
    search: String
    replacement: String
 */
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};