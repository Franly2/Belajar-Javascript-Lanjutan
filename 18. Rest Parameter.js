// function myFunc(...rest) {
//   return rest;
//   return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...numbers) {
// ? MENGGUNAKAN FOR OF
// let result = 0;
// for (number of numbers) {
//   result += number;
// }
// return result;
// ? MENGGUNAKAN RETURN
// return numbers.reduce((acc, cur) => (acc += cur));
// }

// console.log(jumlahkan(1, 1, 1, 1));

// * Array Destructuring
// const kelompok1 = [`Rio`, `Michelle`, `Franly`, `Joe`];
// const [ketua, wakil, ...anggota] = kelompok1;

// console.log(anggota);

// * Object Destructuring
// const team = {
//   pm: `Franly`,
//   fe: `Doddy`,
//   fe2: `Rio`,
//   be: `Fajar`,
//   ux: `Gabby`,
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);

// * Filtering
// function typeFilter(type, ...rest) {
//   return rest.filter((item) => typeof item === type);
// }

// console.log(typeFilter("boolean", 2, true, 4, 3, 1, 6, "Halo", 2.3));
