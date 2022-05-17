function missingNumber(arr) {
  let sortedArray = arr.sort();
  let newArray = [];

  if (arr.length % 2 != 0) {
    for (let i = 0; i < arr.length; i++) {
      if (sortedArray[i] != i) {
        newArray.push(i);
      }
    }
  } else {
    for (let i = 0; i <= arr.length; i++) {
      if (sortedArray[i] != i) {
        newArray.push(i);
        break;
      }
    }
  }
  return newArray;
}

let exampleOne = [3, 0, 1];
let outputOne = missingNumber(exampleOne);

console.log(outputOne);

let exampleTwo = [0, 1];
let outputTwo = missingNumber(exampleTwo);


console.log(outputTwo);

let exampleThree = [9, 6, 4, 2, 3, 5, 7, 0, 1];
let outputThree = missingNumber(exampleThree);

console.log(outputThree);

// for checking the above function
let exampleFour = [0, 1, 3, 4];
let outputFour = missingNumber(exampleFour);

console.log(outputFour);






