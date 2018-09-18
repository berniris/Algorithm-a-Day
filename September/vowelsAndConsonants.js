// from HackerRank - print all vowels on their own line and then print all constants from input on their own line 


var vowelConstCount = function(s) {
    const vowels = 'aeiou';
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i])
        }
    }
    for (let j = 0; j < s.length; j++) {
        if (vowels.indexOf(s[j]) === -1)
        // note: if(!vowels.includes(s[j])) would work exactly the same too and is the same method as what you used above 
            console.log(s[j]);
    }

}
vowelConstCount("javascriptloops")