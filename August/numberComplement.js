// Given a positive integer, output its complement number.The complement strategy is to flip the bits of its binary representation.

// Note:
//     The given integer is guaranteed to fit within the range of a 32 - bit signed integer.
// You could assume no leading zero bit in the integer’ s binary representation.
// Example 1:
//     Input: 5
// Output: 2
// Explanation: The binary representation of 5 is 101(no leading zero bits), and its complement is 010. So you need to output 2.
// Example 2:
//     Input: 1
// Output: 0
// Explanation: The binary representation of 1 is 1(no leading zero bits), and its complement is 0. So you need to output 0.

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var comp = []
    var bin = num.toString(2).split('');
    for (var i = 0; i < bin.length; i++) {
        var num = Number(bin[i])
        console.log(num)
        if (num == 1) {
            num = 0
        } else {
            if (num == 0) num = 1;
        }
        comp.push(num)
    }
    comp = comp.join('').toString();
    comp = parseInt(comp, 2);
    return comp;
}