let nilai = [
    {
        nama: "budi",
        ipa: 90,
        bahasa: 70,
        mtk:78,
    },
    {
        nama: "mensen",
        ipa: 90,
        bahasa: 80,
        mtk:78,
    },
    {
        nama: "budiman",
        ipa: 39,
        bahasa: 50,
        mtk:78,
    },
    {
        nama: "sukiman",
        ipa: 20,
        bahasa: 90,
        mtk:98,
    },
]

let nama = ["budi", "mensen", "budiman", "sukiman"];
//nama.push("ani", "ino");
//console.log(nama.pop());
//console.log(nama.shift());
//nama.unshift("bobi", "babi");
//console.log(nama.splice(3));
//console.log(nama.slice(0, 3));

let mapel = ["ipa", "bahasa", "mtk"];
//console.log(nama.concat(mapel));
//console.log(nama.concat(['ips','pkn','sejrah']));

//console.log(nilai[0].nama);
//console.log(nama);

// for (let index = 0; index < nama.length; index++) {
//     console.log(nama[index]);
// }
// nama.forEach(function (a) {
//     console.log(a);
// })

// nama.forEach((a) => console.log(a));

// nilai.filter(function (a){
//     if (a.ipa>80) {
//         console.log(a);
//     }
// })

//nilai.filter((a) => (a.ipa > 80 && a.mtk > 70 ? console.log(a.nama) : null));


//MAP
        // let siswa = nilai.map(function (a) {
        //     return a.nama;
        // });

        // let siswa = nilai.map(a => [a.ipa, a.bahasa, a.mtk]);

        // console.log(siswa);


// SORT 
    // mapel.sort();   
    
    // console.log(mapel);


// REDUCE 
    // let hasil = nilai.reduce(function (a, b) {
    //     return (a = a + b.ipa);
    // }, 0);

    // let hasil = nilai.reduce((a, b) => (a += b.mtk), 0);

    // console.log(hasil);

