let url = "https://www.sadikturan.com";
var kursAdi = "Komple Web Geliştirme Kursu";

// 1- url kaç karakterlidir?

console.log(url.length);

// 2- kursAdi kaç kelimeden oluşmaktadır?
let kursadi_dilListesi=kursAdi.split (" ");
console.log(kursadi_dilListesi.length);
// 3- url https ile mi başlıyor?
console.log(url.startsWith("hstp"));


// 4- kursAdi içerisinde Eğitimi kelimesi var mı?
console.log(kursAdi.includes("Eğitimi"));
if(kursAdi.includes("Eğitim")){
    console.log("Evet kursadi değişkeninde böyle bir karekter mevcut.")
}else{
    console.log("böyle bişey yok moruk kursadinda.")
}


// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.

var kursAdi = kursAdi.toLocaleLowerCase();
var kursAdi = kursAdi.replaceAll(" ","-");
var yeniLink= url+"/"+kursAdi;
console.log(kursAdi);
console.log(yeniLink);

// https://www.sadikturan.com/komple-web-gelistirme-kursu

