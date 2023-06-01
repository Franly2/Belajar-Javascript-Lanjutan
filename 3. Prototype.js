// ! Menggunakan obejct.create
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Selamat Datang ${this.nama}, selamat makan!`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Selamat datang ${this.nama}, selamat bermain`);
//   },
//   tidur: function (durasi) {
//     this.energi += durasi * 2;
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let John = Mahasiswa("John Cena", 120);

// ! menggunakan prototype
function Mahasiswa (nama, energi){
  this.nama = nama;
  this.energi = energi;
};

Mahasiswa.prototype.makan = function(porsi){
  this.energi += porsi;
  console.log(`Selamat Makan ${this.nama}, energi = ${this.energi}`)
};

let tom = new Mahasiswa(`Tom Cruise`, 80);


