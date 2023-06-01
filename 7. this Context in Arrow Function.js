// const Mahasiswa = function () {
//   this.nama = "Franly";
//   this.umur = 17;
//   this.sayHello = function () {
//     console.log(`halo nama saya ${this.nama} dan umur saya ${this.umur}`);
//   };
// };

// const franly = new Mahasiswa();

// ! Arrow Function
// const Mahasiswa = function () {
//   this.nama = "Franly";
//   this.umur = 17;
//   this.sayHello = () => {
//   console.log(`halo nama saya ${this.nama} dan umur saya ${this.umur}`);
//   };
// };

// const franly = new Mahasiswa();

// Object Literal 5:30 menit

// const mhs1 = {
//   nama: "franly",
//   umur: 17,
//   sayHello: () => {
//     console.log(this);
//     console.log(`halo nama saya ${this.nama} dan umur saya ${this.umur}`);
//   },
// };

// const Mahasiswa = function () {
//   this.nama = "Franly";
//   this.umur = 17;
//   this.sayHello = function () {
//     console.log(`halo nama saya ${this.nama} dan umur saya ${this.umur}`);
//   };
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// const franly = new Mahasiswa();


// //! KASUS ARROW FUNCTION YANG REAL
const box = document.querySelector(`.box`);

box.addEventListener(`click`, function () {
  let satu = `size`;
  let dua = `caption`;
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
