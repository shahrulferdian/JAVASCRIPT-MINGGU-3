// $( document ).ready(function() {
//     console.log( "siap" );
// });

// lebih singkat
$(function() {
    $("#isi").html("<h1>Belajar JQuery</h1>");

    $("button").click(function (e) {
        e.preventDefault();
        alert("Belajar js");
    }) ;

    // $("#isi").mouseleave(function (e) {
    //     alert("mouse leave");
    //     console.log("mouse y")
    // }) ;
});