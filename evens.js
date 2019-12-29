// write a function that returns the array with only even numbers
const printeven = (array) => {
  let result =[];
  for (let i=0; i<array.length; i++) {
    if(!(array[i] & 1 === 1)){
      result.push(array[i]);
    }
  }
  return result;
}

console.log(printeven([1,2,3,4,5,6]))


