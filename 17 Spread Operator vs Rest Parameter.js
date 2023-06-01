// ! Spread Operator
// memecah iterables menjadi single element

// const mhs = [`Franly`, `Mayu`, `Johnson`];
// console.log(...mhs[0]);

// * Menggabungkan 2 array
// const mhs = [`Franly`, `Mayu`, `Johnson`];
// const dosen = [`Ade`, `Sandhika`, `John`];

// const orang = [...mhs, `Aji`, ...dosen];
// const orang = mhs.concat(dosen);
// console.log(orang);

// * meng-copy array
// const mhs = [`Franly`, `Mayu`, `Johnson`];

// const mhs1 = [...mhs];
// mhs1[0] = `Fajar`;
// console.log(mhs1);

// * mengambil text content Li menjadi value sebuah Array
const liNames = document.querySelectorAll(`.nama`);

// let mhs = [];
// ? dengan menggunakan for of
// for (nama of liNames) {
//   mhs.push(nama.textContent);
// }
// ? dengan menggunakan spread operator
// const map = [...liNames].map((nama) => nama.textContent);

// console.log(map);

// * kasus penggunaan spread operator

const nama = document.querySelector(`.Penulis`);
const huruf = [...nama.textContent].map((a) => `<span>${a}</span>`).join("");
nama.innerHTML = huruf;

console.log(huruf);
