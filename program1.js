/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (pairs[char]) {
            stack.push(char);
        } else {
            var lastOpen = stack.pop();
            if (pairs[lastOpen] !== char) {
                return false;
            }
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
    
    
};

module.exports = { isValid };


