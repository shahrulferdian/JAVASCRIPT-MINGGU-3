let fungsi = function (nama) {
    console.log("belajar function" + nama);
};

fungsi(" joni");

let contoh = (nama) => {
    console.log("belajar function" + nama);
};

contoh(" budi");

let tmbh = function (a, b) {
    return a + b;
};

console.log(tmbh(3, 2));

let pls = (a, b) => a + b;
console.log(pls(2, 3));

let hasil = (a) => a * 2;
console.log(hasil(5));

let next = () => console.log("coba lagi");
next();

let blajar = () => {
    console.log("coba 1")
    console.log("coba 2")
    console.log("coba 3")
};

blajar();

let nilai = 7;
let uji = (nilai < 9) ? () => console.log("gagal") : () => console.log("lulus");
uji();

let n = 90;
let uj = n < 9 ? () => p="gagal" : () => p="lulus";
console.log(uj());
