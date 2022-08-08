function leapYear(year){
    if(year % 4 ===0){
        return true;
    }
    else{
        return false;
    }
}
var checklepYear=leapYear(2020);
console.log(checklepYear)