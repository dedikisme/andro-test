function fnHitung() {
var angka = document.getElementById('inputku').value;
if (document.getElementById('inputku').value == "") {
alert("Jangan Dikosongi");
document.getElementById('inputku').focus();
return false;
}
else
if (angka >= 1) {
var hasil;
hasil = angka*0.6;
alert(angka+" Mil = "+hasil+" Kilometer");
document.getElementById('inputku').focus();
document.getElementById('inputku').value = tandaPemisahTitik(angka) ;
return false;
}
}
