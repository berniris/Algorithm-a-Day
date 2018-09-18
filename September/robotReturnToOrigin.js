// There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

// Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

// Example 1:

// Input: "UD"
// Output: true 
// Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.


// Example 2:

// Input: "LL"
// Output: false
// Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.


var judgeCircle = function(moves) {
    let u;
    let d;
    let r;
    let l;
    let moveCount = [];
    if (moves[0] === "U" || "R") {
        u = 1;
        d = -1;
        r = 1;
        l = -1;
    }
    if (moves[0] === "D" || "L") {
        d = 1;
        u = -1;
        l = 1;
        r = -1;
    }

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "U") moveCount.push(u)
        if (moves[i] === "D") moveCount.push(d)
        if (moves[i] === "R") moveCount.push(r)
        if (moves[i] === "L") moveCount.push(l)
    }

    const sum = moveCount.reduce((acc, currentValue) => {
        return acc + currentValue;
    }, 0);

    if (sum === 0 && moveCount.length !== 4) {
        return true;
    } else {
        return false;
    }
}

judgeCircle("DURDLDRRLL")