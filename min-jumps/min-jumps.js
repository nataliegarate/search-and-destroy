'use strict';

// Complete this algo
const minJumps = arr => {
  let count = 1;
  let currentIndex = 0;

  for (let i = currentIndex; i <= arr[currentIndex] + currentIndex; i++) {
    if (arr[currentIndex] < arr[i] && arr[currentIndex] < arr.slice(currentIndex).length) {
      console.log('before', arr[currentIndex])
      currentIndex = i;
      console.log('after', arr[currentIndex])
      count++;
    } else if (i === arr[currentIndex] + currentIndex && i < arr.length) {
      console.log('before', arr[currentIndex])
      currentIndex = i;
      console.log('after', arr[currentIndex])
      count++;

    }
  }

  return count;
};

module.exports = minJumps
