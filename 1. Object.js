// ! Cara membuat Object pada JS
// * 1. Object Literal
// PROBLEM : tidak efektif unutuk membuat Object yang banyak

// let mahasiswa = {
//   nama: "Tom Cruise",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Selamat Datang ${this.nama}, selamat makan!`);
//     return this.energi;
//   },
// };

// * 2. Function Declaration
// PROBLEM : Kurang praktis dan boros memory
// function Mahasiswa (nama, energi){
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function(porsi){
//     this.energi += porsi;
//     console.log(`Selamat makan ${nama}`);
//     console.log(`energi = ${this.energi}`);
//   };
//   return mahasiswa;
// }

// let tom = Mahasiswa("Tom Cruise", 50);
// let mia = Mahasiswa("Mia Johnson", 20);


// * 3. Constructor Function
// menggunakan keyword new
function mahasiswa (nama, energi){
  this.nama = nama;
  this.energi = energi;
  this.makan = function(porsi){
    this.energi += porsi
    console.log(`Selamat Makan ${this.nama}`);
    console.log(`Energi = ${this.energi}`);
}
}

let lebron = new mahasiswa(`Lebron James`, 100)

// * 4. Object create
