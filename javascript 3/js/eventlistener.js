function coba() {
    a = document.querySelector(".isi").innerHTML = "belajar eventlistener";
    console.log("coba eventlistener");
}
//judul.addEventListener("click", coba);

//judul.onclick = coba;
judul.onmouseover = coba;