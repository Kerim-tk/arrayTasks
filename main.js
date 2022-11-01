function one() {
  console.log("1. Find the minimum element of this array");
  const array = [3, 5, 4, 99, 77, 22, 55, 48, 98, 2];
  let minimum = array[0];
  for (const item of array) {
    if (item < minimum) {
      minimum = item;
    }
  }
  console.log(array);
  console.log(minimum);
}

function two() {
  console.log("2. Find the maximum element of this array");
  const array = [3, 5, 4, 99, 77, 22, 55, 48, 98, 2];
  let max = array[0];
  for (const item of array) {
    if (item > max) {
      max = item;
    }
  }
  console.log(array);
  console.log(max);
}

function three() {
  console.log("3. Find the index of the minimum element of this array");
  const array = [3, 5, 4, 99, 77, 22, 55, 48, 98, 2];
  let minimum = array[0];
  for (const item of array) {
    if (item < minimum) {
      minimum = item;
    }
  }
  console.log(array);
  console.log(minimum);
  console.log(array.indexOf(minimum));
}

function four() {
  console.log("4. Find the index of the maximum element of this array");
  const array = [3, 5, 4, 99, 77, 22, 55, 48, 98, 2];
  let max = array[0];
  for (const item of array) {
    if (item > max) {
      max = item;
    }
  }
  console.log(array);
  console.log(max);
  console.log(array.indexOf(max));
}
function five() {
  console.log("5. Calculate the sum of array's elements with odd indices");
  const array = [3, 5, 4, 99, 77, 22, 55, 48, 98, 2];
  console.log(array);
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      sum = sum + array[i];
    }
    console.log(sum);
  }
}
function six() {
  console.log(
    "6. Reverse this array (array in reverse direction) - you have to create YOUR OWN function, which WILL NOT create any new array"
  );
  const array = [3, 5, 4, 99, 77, 22, 55, 48, 98, 2];
  console.log(array);
  let len = array.length;
  for (let i = 0; i < len / 2; i++) {
    let temp = array[len - i - 1];
    array[len - i - 1] = array[i];
    array[i] = temp;
  }
  console.log(array);
}

function seven() {
  console.log("7. Count the number of odd elements in the array");
  const array = [3, 5, 4, 99, 77, 22, 55, 48, 98, 2];
  console.log(array);
  let c = 0;
  for (let i = 0; i < array.length; i++) 
  if (array[i] % 2 != 0) c++;

  console.log(c);
}

function eight() {
    console.log("8. Swap the first and second half of the array, for example, for an array of 1234, the result is 3412, or for 12345 the result will be 45312.");
    const array = [3, 5, 4, 99, 77, 22, 55, 48, 98, 2];
    console.log(array);
    for( let i = 0; i < array.length / 2; i++){
        let temp = array[array.length / 2 + i];
        array[array.length / 2 + i] = array[i];
        array[i] = temp;
    }
    console.log(array);
}

function nine() {
    console.log("9. Sort the array in ascending order in one of the following ways: bubble sort, selection sort or insertion sort.");
    const array = [3, 5, 4, 99, 77, 22, 55, 48, 98, 2];
    console.log(array);
    let temp;
    let smallest;
    for (let i = 0; i < array.length - 2; i++){
        smallest = i;
        for(let j = i; j < array.length; j++){
            if(array[j]< array[smallest]){
                smallest = j;
            }
        }
        temp = array[smallest];
                    array[smallest] = array[i];
                    array[i] = temp;
    }
    console.log(array)
    
}
nine()
  