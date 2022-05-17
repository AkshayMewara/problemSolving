function missingNumber(arr) {
  let sortedArray = arr.sort();
  let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (sortedArray[i] != i) {
        newArray.push(i);
      }
    }
  return newArray;
}

let exampleOne = [3, 0, 1];
let outputOne = missingNumber(exampleOne);

console.log(outputOne);

//above function is not working for the example 2 so i made another file (index copy.js) which has some logic that satisfy all three examples 
let exampleTwo = [0, 1];
let outputTwo = missingNumber(exampleTwo);


console.log(outputTwo);

let exampleThree = [9, 6, 4, 2, 3, 5, 7, 0, 1];
let outputThree = missingNumber(exampleThree);

console.log(outputThree);



let exampleFour = [3, 0, 1];
let ouputFour = exampleFour.filter((i)=>{
  
}
)

