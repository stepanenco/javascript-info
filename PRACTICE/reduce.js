
const foo = {
  foo: 1,
  bar: 2,
  baz: 3
};

let newObj = {};
let myNewObj = {};

// ==== Option with forEach ====
Object.keys(foo).forEach(prop => newObj[prop] = null);

// ==== Option with Reduce ====
let bar = Object.keys(foo).reduce((myNewObj, prop) => {
  myNewObj[prop] = null;
  return myNewObj;
}, {});

console.log(newObj);   // { foo: null, bar: null, baz: null }
console.log(bar);      // { foo: null, bar: null, baz: null }


const nums = [5, 9, 7];

let check = nums.forEach((num, index) => nums[index] = num + 1);   // forEach returns nothing
let added = nums.map(num => num + 1);

console.log(check);   // undefined
console.log(nums);    // [ 6, 10, 8 ]
console.log(added);   // [ 7, 11, 9 ]