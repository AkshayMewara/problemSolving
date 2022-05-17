function arrayOutput(arr, target) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == target && i != j) {
        newArray.push(i, j);
        // break;
        i=arr.length;
      }
      // i=arr.length
    }
  }
  return newArray;
}

let nums = [2, 7, 11, 15];
let output = arrayOutput(nums, 9);

console.log(output);

let numsNew = [3, 2, 4];
let outputNew = arrayOutput(numsNew, 6);

console.log(outputNew);

let newNums = [3, 3];
let newOutput = arrayOutput(newNums, 6);

console.log(newOutput);
