const ftoc = function(tempF) {
  let tempInC =(tempF-32)*5/9;
  return parseFloat(tempInC.toFixed(1));
};

const ctof = function(tempC) {
  let tempInF = tempC*9/5+32;
  return parseFloat(tempInF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
