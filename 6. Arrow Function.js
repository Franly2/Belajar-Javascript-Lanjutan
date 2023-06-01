// ! Arrow Fucntion adalah versi ringkas dari function expression

// const tampilNama = function (nama) {
//   return `Halo ${nama}`;
// };
// console.log(tampilNama(`Franly`));

// * jika menggunakan arrow funcion
// const tampilNama = (nama) => {
//   return `Halo ${nama}`;
// };
// console.log(tampilNama(`Tom`));

// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };

// console.log(tampilNama(`Franly`, `Pagi`));

// ! implicit function
//  * jika parameternya hanya satu, tidak perlu pakai kurung
//  * jika isi function nya hanya return, tidak perlu menulis return nya
//  * dan tidak perlu menulis kurung kurawal
// const tampilNama = (nama) => `Halo ${nama}`;
// console.log(tampilNama(`Tom`));

// * jika tanpa parameter, masih harus menuliskan tanda kurung buka dan tutupnya
// const tampilNama = () => `Halo`;
// console.log(tampilNama());

// let mahasiswa = [`Robert`, `Sean`, `Shawn`];

// let jumlah = mahasiswa.map((nama) => ({
//   nama: nama,
//   jmlHuruf: nama.length,
// }));

// console.table(jumlah);

