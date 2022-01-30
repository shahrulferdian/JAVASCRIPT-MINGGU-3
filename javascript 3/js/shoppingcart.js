let tblmenu = [
    {
    idmenu : 1, 
    idkategori : 33, 
    menu : "GEDDANG", 
    gambar : "pisang.jpg", 
    harga : 4000
    },

    {
    idmenu : 2, 
    idkategori : 31, 
    menu : "ES TEHH", 
    gambar : "esteh.jpg", 
    harga : 8000
    },

    {
    idmenu : 3, 
    idkategori : 33, 
    menu : "SEGO AYAM", 
    gambar : "nasiayam.jpg", 
    harga : 4000
    },

    {
    idmenu : 4, 
    idkategori : 33, 
    menu : "SEGO PETENG", 
    gambar : "nasipadang.jpg", 
    harga : 4000
    },

    {
    idmenu : 5, 
    idkategori : 31, 
    menu : "Es Jeruk", 
    gambar : "esjeruk.jpg", 
    harga : 8000
    },

    {
    idmenu : 6, 
    idkategori : 71, 
    menu : "Es Jeruk", 
    gambar : "apel.jpg", 
    harga : 8000
    },
];

let tampil = tblmenu.map(function (kolom) {
    return `<div class="produk-content">
                <div class="image">
                    <img src="images/${kolom.gambar}">
                </div>

                <div class="titel">
                    <h2>${kolom.menu}</h2>
                </div>

                <div class="harga">
                    <h2>Rp. ${kolom.harga}</h2>
                    <div class="btn-beli">
                        <button data-idmenu=${kolom.idmenu}>bheli ngabs</button>
                    </div>
                </div>

                
            </div>`;
});

let isi = document.querySelector(".produk");
    isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        // console.log(btnbeli[index].dataset["idmenu"]);
        // cart.push(btnbeli[index].dataset["idmenu"]);

        tblmenu.filter(function (a) {
            if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    };
};

// console.log(cart); 
