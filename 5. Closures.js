// function init() {
//   return function (nama) {
//     console.log(nama);
//   };
// }

// let panggilNama = init();
// panggilNama(`Tom`);

// ? JIKA MENGGUNAKAN IIFE
// let ucapHalo = (function init() {
//   return function (nama) {
//     console.log(`halo ${nama}`);
//   };
// })();

// ucapHalo("gakpo");

// ! Kenapa menggunakan closures
// * untuk membuat function factories
// * untuk membuat private method/private variable

// ? Function factories
// yang berarti membuat function sesuai dengan function yang lain
// function ucapkanSalam (waktu){
//   return function (nama){
//     console.log(`Hai, Selamat ${waktu} ${nama} `)
//   };
// };

// let Pagi = ucapkanSalam(`Pagi`);
// let Siang = ucapkanSalam(`Siang`);
// let Malam = ucapkanSalam(`Malam`);

// Pagi("Franly")


// ? Private Method/Variable
// yang berarti let counter di dalam function add tidak akan terpengaruh dari counter = 100

let add = (function() {
  let counter = 0;
  return function(){
    return ++counter;
  };
})()

console.log(add());
console.log(add());
console.log(add());


