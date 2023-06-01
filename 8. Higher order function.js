// function kerjakanTugas(mataKuliah, selesai) {
//   console.log(`selamat mengerjakan tugas ${mataKuliah}`);
//   selesai();
// }

// function tutup() {
//   alert(`Selamat mengerjakan tugas`)
// };

// kerjakanTugas(`Database`, tutup);

// ! kenapa menggunakan higher order function
// ! 1. Abstraksi
// function repeatLog(n, action) {
//   for (let i = 1; i <= n; i++) {
//     action(i);
//   }
// }

// repeatLog(2, console.log);

let arr1 = [2, 4, 21, 7, 4, 8, 3, 5]

function isEven(x) {
  return x % 2 === 0
}

function isOdd(x) {
  return x % 2 != 0
}

function twoTime(x) {
  return x * 2
}

// * freeCodeCamp

// ! Cara Melewati Fungsi sebagai Argumen ke Fungsi Lain (freecodecamp)
// function filter (arr,callback){
//   let filteredArray = [];
//   for(let i = 0; i < arr.length; i++){
//     callback(arr[i]) ? filteredArray.push(arr[i]) : null;
//   }
//   return filteredArray;
// }
// ! How to Create Polyfills (freecodecamp)
Array.prototype.filterFunction = function (callback) {
  let filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) ? filteredArray.push(this[i]) : null;
  }
  return filteredArray;
};

// console.log(arr1.filterFunction(isEven))

// ! Function Chaining (freecodecamp)
// console.log(arr1.filterFunction((x)=> x > 1).filterFunction((x)=> {x%2 != 0}))

// ! How to Return a Function from Another Function in JavaScript (freecodecamp)

function calculate(operation) {
  switch (operation) {
    case "ADD":
      return function (a, b) {
        console.log(`${a} + ${b} = ${a+b}`);
      };
    case "SUBSTRACT":
      return function (a, b) {
        console.log(`${a} - ${b} = ${a-b}`);
      };
  }
}

let add = calculate("ADD")
let substract = calculate("SUBSTRACT")

// console.log(add(1,2))

// ! Call the returned function using double parentheses (freecodecamp)

// console.log(calculate("ADD")(2,2))