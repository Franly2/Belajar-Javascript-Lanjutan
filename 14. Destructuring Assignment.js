// ! Destructuring Array
// const myArr = [`satu`, `dua`, `tiga`]

// const [a, b, c] = myArr
// // skip item
// // const [a, , c] = myArr

// console.log(a)
// console.log(b)
// console.log(c)

// * Swap items
// let a = 1;
// let b = 2;

// console.log(a);
// [a, b] = [b, a];
// console.log(a);

// * Return value pada function
// function coba() {
//   return [1, 2];
// }

// [a, b] = coba();
// console.log(b);

// * Rest parameter
// const [a, ...args] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(args[1]);

// ! Destructuring Object
// const mhs = {
//   nama: "Franly Budi Pramana",
//   umur: 18,
//   email: "franlybudipramana@gmail.com",
// };

// const { nama, umur, email } = mhs;

// console.log(nama);
// console.log(umur);
// console.log(email);

// * Assignment tanpa deklarasi object
// ({ nama, umur, asal } = {
//   nama: "Franly Budi Pramana",
//   umur: 17,
//   asal: "Bangkalan",
// });

// console.log(asal);
// * Assign ke variable baru
// const mhs = {
//   nama: "Franly Budi Pramana",
//   umur: 18,
//   email: "franlybudipramana@gmail.com",
// };

// const { nama: n, umur: u, email } = mhs;

// console.log(n);

// * Default value
// const mhs = {
//   nama: "Franly Budi Pramana",
//   umur: 18,
//   // email: "franlybudipramana@gmail.com"
// };

// const { nama, umur, email = `tidak memiliki email` } = mhs;

// console.log(email);

// * Memberi nilai default dan assign ke variable baru
// const mhs = {
//   nama: "Franly Budi Pramana",
//   umur: 18,
//   email: "franlybudipramana@gmail.com",
// };

// const { nama: n, umur: u, email: e = `email@default.com` } = mhs;

// console.log(e)

// * Rest parameter
// const mhs = {
//   nama: "Franly Budi Pramana",
//   umur: 18,
//   email: "franlybudipramana@gmail.com",
// };

// const { nama, ...value } = mhs;

// console.log(value);

// * Mengambil field pada object
const sis1 = {
  id: 123,
  nama: `Franly Budi Pramana`,
  kelas: `XII TKJ`,
};

function getIdByNumber({ id }) {
  return id;
}

console.log(getIdByNumber(sis1));
