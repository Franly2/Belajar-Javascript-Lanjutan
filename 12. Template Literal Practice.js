// ! HTML Fragments
// * 1.HTML Fragments
// const mhs = {
//   nama: "Franly Budi Pramana",
//   umur: 18,
//   nrp: 237173617823,
//   email: "franlybudipramana@gmail.com",
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;
// document.body.innerHTML = el;

// * 2.Looping
// const mhs = [
//   {
//     nama: "Tom Lewandowski",
//     email: "tomlewandowski@gmail.com",
//   },

//   {
//     nama: "Doddy Messi",
//     email: "doddymessi@gmail.com",
//   },

//   {
//     nama: "Chris Mbappe",
//     email: "chrismbappe@gmail.com",
//   },
// ];
// looping dengan template literal
// const el = `<div class="mahasiswa">
//               ${mhs.map((m) => `<ul>
//                             <li>${m.nama}</li>
//                             <li>${m.email}</li>
//               </ul>`).join(" ")}
//             </div>`;
// document.body.innerHTML = el;

// * 3.Conditional
// const lagu = {
//   judul: "Somebody To Love",
//   penyanyi: "Justin Bieber",
//   feat: "Usher",
// };

// const lagu1 = `<div class="lagu">
// <ul>
// <li>Judul : ${lagu.judul}</li>
// <li>Penyanyi : ${lagu.penyanyi} ${lagu.feat ? `feat. ${lagu.feat}` : " "}</li>
// </ul>
// </div>`;

// document.body.innerHTML = lagu1;

//  * 4.Nested
// HTML Fragments bersarang
const mhs = {
  nama: "Franly Budi Pramana",
  semester: 5,
  mataKuliah: [
    `Rekayasa Web`,
    `Pemrograman berorientasi objek`,
    `Perancangan sistem informasi`,
    `Database terapan`,
    `Big data`,
    ,
  ],
};

// ! CARA 1
// const mahasiswa = `<div class="mahasiswa">
//   <h2>Nama : ${mhs.nama}</h2>
//   <span>Semester : ${mhs.semester}</span>
//   <ol>
//   ${mhs.mataKuliah.map((m) => `<li>${m}</li>`).join("   ")}
//   </ol>
// </div>`;

// ! CARA 2 (function cetak mata kuliah dipisah dari variabel utama)
function cetakMataKuliah(mataKuliah) {
  return `
  <ol>
  ${mataKuliah.map((mk) => `<li>${mk}</li>`).join(" ")}
  </ol>
  `;
}

const mahasiswa = `<div class="mahasiswa">
  <h2>Nama : ${mhs.nama}</h2>
  <span>Semester : ${mhs.semester}</span>
  ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = mahasiswa;
