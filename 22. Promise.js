// $.ajax({
//     url: `http://www.omdbapi.com/?apikey=81fd2841&s=marvel` ,
//     success: (m)=> console.log(m),
// })

// ! menggunakan fetch
// fetch(`http://www.omdbapi.com/?apikey=81fd2841&s=marvel`)
//     .then(response => response.json())
//     .then(response => console.log(response))

// ! Promise
// * object yang mempresentasikan keberhasilan atau kegagalan dari sebuah event yang acynchrounous di masa yang akan datang
// * janji (terpenuhi / ingkar )
// *dalama JS ada beberapa state yaitu (terpenuhi = fullfiled)
// *                                   (ingkar = rejected)
// *                                   (waktu tunggu sebelum janji nya terpenuhi atau tidak = pending)
// *callback (resolve / reject / finally)
// *aksi(then / catch)

// ! contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve(`Janji ditepati`);
//   } else {
//     reject(`Ingkar janji`);
//   }
// });

// janji1
//   .then((respon) => console.log(`OK :` + respon))
//   .catch((respon) => console.log(`NOT OK :` + respon));

// ! contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve(`ditepati setelah menunggu`);
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject(`ingkar setelah menunggu`);
//     }, 2000);
//   }
// });

// console.log(`mulai`);
// janji2
//   .finally(() => console.log(`selesai menunggu`))
//   .then((respon) => console.log(`OK :` + respon))
//   .catch((respon) => console.log(`NOT OK :` + respon));
// console.log(`selesai`);

// * penggunaan finally biasanya digunakan untuk membuat animasi loading
// * 1.ketika promise mulai jalan maka jalankan animasi loading nya
// * 2.ketika finally maka matikan animasi loading nya

// ! promise.all (digunakan saat memiliki banyak promise yang ingin dijalankan sekaligus)

const film = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        judul: "ABCD",
        sutradara: "XYZ",
        aktor: ["BrDW", "jdwv"],
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        Kota: `Surabaya`,
        Suhu: 32,
        Cuaca: `Cerah`,
      },
    ]);
  }, 500);
});

film.then((respon) => console.log(respon));
cuaca.then((respon) => console.log(respon));

Promise.all([film, cuaca])
  // .then((respon) => console.log(respon))
  .then((respon) => {
    let [film, cuaca] = respon;
    console.log(film);
    console.log(cuaca);
  });
