//ambil setiap elemen
let videos = Array.from(document.querySelectorAll("[data-durasi]"));

// pilih hanya yang Focus Mode
let focusMode = videos.filter((video) => {return video.innerHTML.includes("Focus")})

// ambil data durasi masing masing video
.map((x) => {return x.dataset.durasi})

// ubah data durasi menjadi int
.map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part))
    return parts[0] *60 + parts[1]
})

// jumlahkan seluruh durasi
.reduce((acc, cur) => acc + cur)

// rubah durasi menjadi format jam, menit, detik
const jam = Math.floor(focusMode / 3600);
const menit = Math.floor((focusMode % 3600) / 60);
const detik = Math.floor(focusMode % 60);

// simpan ke HTML
let pDurasi = document.querySelector(".durasi")
let pJumlah = document.querySelector(".jumlah")

pDurasi.innerHTML = `${jam} Jam ${menit} Menit ${detik} Detik`;
let total = videos.filter((video) => {return video.innerHTML.includes("Focus")}).length;
pJumlah.innerHTML = `${total} Video`


console.log(focusMode)
console.log(jam)
console.log(menit)
console.log(detik)
