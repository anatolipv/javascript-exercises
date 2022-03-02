const removeFromArray = function(arrayInput,...valuesToRemove) {
    let filtered= arrayInput.filter(value=>valuesToRemove.indexOf(value)===-1);

    return filtered;


}

// Do not edit below this line
module.exports = removeFromArray;
