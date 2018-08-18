// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.

var hammingDistance = function(x, y) {
    var hammingCount = 0;
    var int1Binary = x.toString(2);
    var int2Binary = y.toString(2);

    while (int1Binary.length < 8 || int1Binary.length < int2Binary.length) {
        int1Binary = "0" + int1Binary;
        console.log(int1Binary)
    }
    while (int2Binary.length < 8 || int2Binary.lenth < int1Binary.length) {
        int2Binary = "0" + int2Binary;
        console.log(int2Binary)
    }
    for (var i = 0; i < int1Binary.length; i++) {
        if (int1Binary[i] !== int2Binary[i]) {
            console.log(int1Binary[i])
            console.log(int2Binary[i])
            hammingCount++
        }
    }
    return hammingCount;
};

hammingDistance(1, 4)