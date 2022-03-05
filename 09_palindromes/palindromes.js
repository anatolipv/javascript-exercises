const palindromes = function (a) {
    let newstring="";
    for (let i = 0; i < a.length; i++) {
        if(a[i]!=" " && a[i]!="."&& a[i]!=","&& a[i]!="!")
            newstring+=a[i];
    }
    let reversed="";
    for (let i = newstring.length-1; i >=0; i--){
        reversed+=newstring[i];
       
    }
    if(newstring.toLowerCase()==reversed.toLowerCase())
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;
