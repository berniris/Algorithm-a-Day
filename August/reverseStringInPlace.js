// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

/**
 * @param {string} 
 * @return {string}
 */

var reverseWords = function(s) {
    var words = s.split(' ');
    var reversed = words.map(function(word) {
        word = word.split('');
        return word = word.reverse().join('');
    })
    return reversed = reversed.join(' ');

};