// Callback
// * Synchronous Callback
// function halo(nama) {
//   alert(`halo ${nama}`);
// }

// function data(callback) {
//   let x = prompt(`Masukkan nama anda`);
//   callback(x);
// }

// data((x) => alert(`Halo ${x}`));

// * 2
// const mhs = [
//   {
//     nama: "Franly Budi Pramana",
//     nrp: "73246278340",
//     email: "dranlybudipramana@gmail.com",
//     jurusan: "`Teknik Informatika",
//     idDosenWali: "1",
//   },
//   {
//     nama: "Michelle",
//     nrp: "73246278340",
//     email: "michelleaverina@gmail.com",
//     jurusan: "Teknik Informatika",
//     idDosenWali: "2",
//   },
//   {
//     nama: "Rio Hartono",
//     nrp: "73246278340",
//     email: "riohartono@gmail.com",
//     jurusan: "Teknik Informatika",
//     idDosenWali: "3",
//   },
//   {
//     nama: "Joshua Jonshen",
//     nrp: "73246278340",
//     email: "joshuajonshen@gmail.com",
//     jurusan: "Teknik Informatika",
//     idDosenWali: "4",
//   },
// ];

// console.log(`Mulai`);
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log(`Selesai`);

// * Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open(`get`, url);
//   xhr.send();
// }

// console.log(`Mulai`);
// getDataMahasiswa(
//   `mahasiswa.json`,
//   (result) => {
//     const mahasiswa = JSON.parse(result);
//     mahasiswa.forEach((m) => {
//       console.log(m.nama);
//     });
//   },
//   () => {}
// );
// console.log(`Selesai`);

// * dengan JQuery
// console.log(`Mulai`);
// $.ajax({
//   url: `mahasiswa.json`,
//   success: (result) => {
//     result.forEach((x) => {
//       console.log(x.nama);
//     });
//   },
//   error: (e) => {
//     console.log(e.responseText);
//   },
// });
// console.log(`Selesai`);
