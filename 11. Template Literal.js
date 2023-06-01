// ! DIGUNAKAN SEBAGAI
// ? Multi-line string
// console.log(`baris1
// baris2
// baris3`);

// ? multi-line string (HTML Fragments)(1)(tidak menggunakan template literal)
// const mhs = {
//   nama: `Franly Budi Pramana`,
//   umur: 18,
//   nrp: `4385723478`,
//   email: `franlybudipramana@gmail.com`,
// };

// let el = ``;
// el += `<div class="mhs">`;
// el += `<h2>` + mhs.nama + `</h2>`;
// el += `<span class="nrp">` + mhs.nrp + `</span>`;
// el += `</div>`;
// console.log(el);


// ? multi-line string (HTML Fragments)(2)(menggunakan template literal)
// let elDenganTemplateLiteral = `<div class="mhs">
// <h2${mhs.nama}</h2>
// <span class = "nrp">${mhs.nrp}</span>
// </div>`;
// console.log(elDenganTemplateLiteral);

// ? Embedded Expression
// const nama = `Franly Budi Pramana`;
// let umur = 17;
// console.log(`Halo, perkenalkan nama saya ${nama}, saya berumur ${umur} tahun.`);
// console.log(`${umur % 2 == 0 ? "genap" : "ganjil"}`);

// ? Expression Interpolation(1)(tidak menggunakan template literal)
// let a = 10;
// let b = 15;
// console.log(
//   `Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah :` +
//     (a + b) +
//     `,bukan ` +
//     (2 * a + b)
// );

// ? Expression Interpolation(2)(menggunakan template literal)
// let a = 10;
// let b = 15;
// console.log(
//   `Jika a = ${a} dan b = ${b}, maka hasil penjumlahannya adalah : ${a + b} bukan ${
//     2 * a + b
//   }`
// );
