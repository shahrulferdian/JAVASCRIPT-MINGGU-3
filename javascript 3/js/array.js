let coba=function () {
    return "coba function";
}

let buah = ["apel", "jeruk", "mangga", 10, coba(),
    (tes = () => "hasil arrow return function"),
    function nama() {
        return "shahrul";
    }
];
console.log(buah);
console.log([0]);

for (let i in buah) {
    console.log(buah[i]);
    
}

console.log(buah[5]());
console.log(buah[6]());
