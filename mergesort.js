function split(wholeArray) {
  let len = wholeArray.length;
  let splitLen = Math.ceil(len / 2);

  let firstHalf = [];
  let secondHalf = [];

  firstHalf = wholeArray.splice(0, splitLen);
  secondHalf = wholeArray;

  return [firstHalf, secondHalf];
}

function merge([arr1, arr2]) {
  let mergedArr = [];

  while (arr1.length > 0 && arr2.length > 0) {
    let arr1item1 = arr1[0];
    let arr2item1 = arr2[0];

    if (arr1item1 <= arr2item1) {
      let tempItem = arr1.shift();
      mergedArr.push(tempItem);
    } else {
      let tempItem = arr2.shift();
      mergedArr.push(tempItem);
    }
  }

  mergedArr = mergedArr.concat(arr1);
  mergedArr = mergedArr.concat(arr2);

  return mergedArr;
}
