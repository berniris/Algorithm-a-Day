// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation: 
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".


// Note:

// The length of words will be at most 100.
// Each words[i] will have length in range [1, 12].
// words[i] will only consist of lowercase letters.


/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    var key = {};
    var transformations = [];
    var uniqueTransformations = [];


    for (var i = 0; i < morse.length; i++) {
        var letter = alphabet[i];
        key[letter] = morse[i];
    }

    words.forEach((word) => {
        var temp = '';
        var str = word.split('');
        str.forEach((letter) => {
            temp = temp.concat(key[letter])
            console.log(temp)
        })
        transformations.push(temp)
    })

    transformations.map((x) => {
        if (uniqueTransformations.indexOf(x) === -1) uniqueTransformations.push(x)
    })

    return uniqueTransformations.length;

};
uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])