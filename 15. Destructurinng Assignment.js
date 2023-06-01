// ! Destructuring

// function penjumalahnPerkalian(a, b) {
//   return [a + b, a - b, a / b, a * b];
// }

// let [jumlah, kurang, bagi, kali] = penjumalahnPerkalian(2, 3);
// console.log(jumlah);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// let { kurang, tambah, bagi, kali } = kalkulasi(2, 3);
// console.log(kurang);

// ! Destructure Function Arguments

const mhs1 = {
  nama: "Franly Budi Pramana",
  umur: 17,
  email: "franlybudipramana@gmai.com",
  nilai: {
    uas: 90,
    uts: 92,
    tugas: 89,
  },
};

// function cetakMhs(obj) {
//   return `Halo nama saya ${obj.nama} dan saya berumur ${obj.umur}`;
// }
// console.log(cetakMhs(mhs1));

// * DENGAN DESTRUCTURING
// function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
//   return `Halo nama saya ${nama} dan saya berumur ${umur} dan nilai UAS saya ${uas}`;
// }
// console.log(cetakMhs(mhs1));
