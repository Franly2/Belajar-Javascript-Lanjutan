//! Array.prototype.filter
//! Array.prototype.map
//! Array.prototype.reduce

const number = [-5, 3, 5, 9, 6, 2, 1, -5, 1, -7];

// TODO filter
// const newNumber = number.filter(function (a) {
//   return a > 4;
// });
// *jika diringkas menggunakan arrow function
// const newNumber = number.filter((a) =>  a > 4);


// TODO map
// meng kalikan 2 seluruh elemen pada array
// const angkaKaliDua = angka.map((a) => a * 2);
// console.log(angkaKaliDua);

// TODO reduce
// menjumlahkan semua elemen pada Array
// const hasilAngka = number.reduce(
//   (accumulator, current) => accumulator + current,
//   0
// );
// console.log(hasilAngka);

// TODO Method Chaining
// cari angka > 4
// kalikan 3
// jumlahkan

const rantai = number
.filter((a) => a >4 )
.map((a) => a * 3)
.reduce((a, b) => a + b, 0)

console.log(chaining);
