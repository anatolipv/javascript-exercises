const repeatString = function(theString,timesToRepeat) {
    if (timesToRepeat <0)
        return 'ERROR';
    else {
    let answer = "";
    for (let i = 0; i < timesToRepeat; i++) {
        answer+=theString;
    }
    return answer;
    }
};

// Do not edit below this line
module.exports = repeatString;
