function inchtofeet(inch){
const checkFeet=inch/12;
return checkFeet;
}

const totalfeet=inchtofeet(200);
console.log(parseFloat(totalfeet.toFixed(2)));