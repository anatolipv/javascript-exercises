const reverseString = function(stringInput) {
    let reversedString = "";
    if(stringInput==="")
        return "";
    else {
    for (let i = stringInput.length-1; i >=0; i--) {
        reversedString += stringInput[i];
        
    }
    return reversedString;
    }
};

// Do not edit below this line
module.exports = reverseString;
