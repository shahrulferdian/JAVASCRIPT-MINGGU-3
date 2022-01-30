let objek = {
    nama: "shahrul",
    telp: 142536,
    buah: ["apel", "nanas", "mangga"],
    
    coba: function () {
        return "coba /function dalam obajek";
    },

    boleh: true,
};

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.buah[0]);
console.log(objek.buah[1]);
console.log(objek.buah[2]);
console.log(objek.coba());
console.log(objek.boleh);