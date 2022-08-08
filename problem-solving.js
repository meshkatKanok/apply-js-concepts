// function hoursTomin(hours){
//     let min=hours*60;
//     return min;
// }
// const checkmin=hoursTomin(5)
// console.log(checkmin)

//problem 2
// function findLeapYear(leap)(leapYearArr){
//     const result=[];
// for(let i=0;i<leapYearArr.length;i++){
//      if(leapYearArr[i]%4 === 0){
//        result.push(leapYearArr[i]);
//      }
// }
// return result;
// }
// const checkleapYear=findLeapYear([2023,2024,2025,2028,2030]);
// console.log(checkleapYear);

////problem 3rd
// function findOddSum(arry) {
//     let sum = 0;
//     for (let i =0; i <= arry.length; i++) {
//         let index = arry[i];
//         if (index % 2 == 1) {
//             sum=sum+index
//         }
//     }
// return sum;
// }
// const checkodd = findOddSum([5, 7, 8, 10, 45, 30]);
// console.log(checkodd);
//problem 5

// function leapYear(leapYear){
// if(leapYear%4==0){
//     return true;
// }
// else{
//     return false;
// }
// }
// const checkleap=leapYear(2023);
// console.log(checkleap);

//problem5
// function oldevenOdd(year){
//     if(year%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const checkold=oldevenOdd(23);
// console.log(checkold)
//problem6
// function hoursTosecond(hours){
//     let seconds = (hours * 60) * 60;
//     return seconds;
// }
// const check=hoursTosecond(4);
// console.log(check);

//problem--7
// for(let i=0;i<=100;i++){
//      let index=i;
//      if(index>=50 && index<=80){
//          if(index%2 == 1){
//             console.log(index);
//          }
//      }
      
     
// }
//problem--8
// function threesumTnte(num1,num2,num3){
//     const total=num1+num2+num3;
//     return total;
// }
// const checkTotal=threesumTnte(12,13,14);
// console.log(checkTotal);
//problem-----19
// function celciousToFarin(convert){
//     let celconvert=convert*1.8 + 32;
//     return celconvert; 
// }
// const checkcelconvert=celciousToFarin(80);
// console.log(checkcelconvert);

//problem--20
// function farTodce(temopra){
//    let C=5/9*(temopra-32);
//    return C;

// }
// const checktem=farTodce(40);
// console.log(parseFloat(checktem.toFixed(3)))

//problem--------------21
// function checkGrade(mark){
//     if(mark>=80 && mark<=100){
//      return "A+"
//     }
//     else if(mark>=70 && mark<80){
//       return 'A';
//     }
//     else if(mark>=60 && mark<70){
//       return "A-";
//     }
//     else if(mark>=50 && mark<60){
//         return "B";
//     }
//     else{
//         return "fail";
//     }

// }
// const checkresult=checkGrade(40);
// console.log(checkresult);


//simple interest

// let p=500;
// let year=4;
// let interest=6.66;

// const totalcheck=p*year*interest/100;
// console.log(totalcheck);
// var rate = 10;
//     rate = rate/100;

// let p=1000;
// let cycleing=6;
// let rate=10;
// rate=10/100;
// let n=1;

// const checkcomplex=p * (Math.pow((1 + (rate / cycleing)), (n * cycleing)))
// console.log(checkcomplex);
 

// var principle =5000 ;
// var rate=10;
// rate=10/100;
// var n = 1;
// var cycling = 3

// var result = principle *(Math.pow((1+(rate/cycling)), n*cycling))

// console.log(result)

// function complexintrest(p,r,n,c){
//     const checkresult=p*(Math.pow((1+(r/c)),n*c));
//     return checkresult;
// }
// let r=10/100;
// const check=complexintrest(5000,r,1,3);
 
// console.log(check)

let arry=[2,4,5,6,7,8,9,10,19,18,17,16,15,14,13,12,1,3,11,20]
//  arry.sort(
//     function(a,b){
//         return a-b;
//     }
//  );
//  console.log(arry)
 