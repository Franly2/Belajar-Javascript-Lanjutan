// * Tagged Template
// const nama = `Franly Budi Pramana`;
// const umur = 17;

// let str = tes`Halo nama saya ${nama}, saya berumur ${umur} Tahun`


// function tes (strings, ...args){
// //   let result = ``
// //   strings.forEach((string, i) => {
// //    result += `${string}${args[i] || ""} `
// //   })
// // return result

// return strings.reduce((acc, str, i) => `${acc}${str}${args[i] || ""}`, "")
// };

// console.log(str)

// * Highlight
const nama = "Franly Budi Pramana"
let umur = 17
let str = highlight`Halo nama saya ${nama}, saya berumur ${umur} Tahun`

function highlight(strings, ...args){
  return strings.reduce((acc, string, i) => `${acc}${string}<span class = "hl">${args[i] || ""}</span>`, ""
  );
};

document.body.innerHTML = str

