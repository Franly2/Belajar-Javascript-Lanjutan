// * 4. Object create
// basis nya adalah cara function declaration
// ! PROBLEM : sebernarnya kita hanya membutuhkan object Mahasiswa bukan methodMahasiswa
// ? SOLUSINYA ADALAH MENGGUNAKAN PROTOTYPE
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Selamat Datang ${this.nama}, selamat makan!`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`Selamat datang ${this.nama}, selamat bermain`);
  },
  tidur: function (durasi) {
    this.energi += durasi * 2;
  },
};

function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}

let John = Mahasiswa("John Cena", 120);
