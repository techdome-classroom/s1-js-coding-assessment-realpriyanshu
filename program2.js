/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    var roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    var total = 0;

    for (var i = 0; i < s.length; i++) {
        var current = roman[s[i]];
        var next = roman[s[i + 1]];

        if (next > current) {
            total += next - current;
            i++;
        } else {
            total += current;
        }
    }

    return total;
    
};


module.exports={romanToInt}