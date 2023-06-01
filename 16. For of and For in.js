// ! FOR OF
const mhs = [`Franly`, `Michielle`, `Clairyne`];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((name, i) => console.log(`${name} adalah mahasiswa ke-${i + 1}`));

// for (const name of mhs) {
//   console.log(name);
// }

// ? for of DENGAN INDEX
// for ([i, name] of mhs.entries()) {
//   console.log(`${name} adalah mahasiswa ke-${i}`);
// }
// * STRING

// let nama = "franly";
// for (char of nama) {
//   console.log(char);
// }

// * Nodelist
const liNames = document.body.querySelectorAll(".nama");
// console.log(liNames);
// ? dengan menggunakan foreach
// liNames.forEach((name) => console.log(name.innerHTML));

// ? dengan menggunakan for of
// for (nama of liNames) {
//   console.log(nama.innerHTML);
// }

// * Arguments
// function jumlahAngka() {
//   let result = 0;
//   for (nama of arguments) {
//     result += nama;
//   }
//   return result;
// }

// console.log(jumlahAngka(2, 54, 45, 2, 5));

// ! For in ( UNTUK OBJECT )
// const mhs1 = {
//   nama: "Franly Budi Pramana",
//   usia: 17,
//   hobi: "coding",
// };

// for (property in mhs1) {
//   console.log(property);
// }

// for (property in mhs1) {
//   console.log(mhs1[property]);
// }
