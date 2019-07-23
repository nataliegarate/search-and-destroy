"use strict";

//Complete this algo
const isLoop = linkedlist => {
  let arr = [];
  let current = linkedlist.head;
  while (current) {
    if (current.next === null) {
      return false;
    } else if (arr.includes(current.next.value)) {
      return true;
    } else {
      arr.push(current.value);
      current = current.next;
    }
  }
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
