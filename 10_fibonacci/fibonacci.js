const fibonacci = function(number) {
    let a=1;
    let b=1;
    let c=0;
    let counter =2;
    if(number ==1 || number == 2)
        return 1;
    else if(number <0)
        return "OOPS";
    else{
        while(counter<number){
            c=a+b;
            a=b;
            b=c;
            counter++;
        }
        return c;
    }
       
};

// Do not edit below this line
module.exports = fibonacci;
