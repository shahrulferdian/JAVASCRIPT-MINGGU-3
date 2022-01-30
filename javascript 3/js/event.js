function tampil(b) {
    a = document.querySelector("p").innerText = "belajar event" + b;
    //a.innerText = "belajar event";
    console.log("belajar event");
}

judul.onclick= function () {
    //console.log("belajar event menngunakan id");
    document.querySelector(".isi").innerHTML = "belajar event menngunakan id";
}