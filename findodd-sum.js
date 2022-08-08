//  var num=0;
//  while(num<10){
//     if(num%2 ==! 0){
//     console.log(num)
//     }
   
//     num++;
//  }

// function getsumOfary(number){
//     let sum=0;

//     for(let i=0;i<number.length;i++){
//         var element=number[i];
//         sum +=element;
//     }
//     return sum;
// }
// const myArry=[12,13,11,14,15,16,17,178];
// const sumofarry=getsumOfary(myArry);
// console.log(sumofarry)


function oddnumberSum(){
    let sum=0;
    for(let i=0;i<=10;i++){
         let index=i;
         if(index%2 !== 0){
              sum+=index;
         }
    }
    console.log(sum);  
}

oddnumberSum();