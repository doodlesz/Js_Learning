// let simdi = new Date(); // şimdiki tarih - saat

// // Get Methods
// sonuc = simdi;
// sonuc = simdi.getDate();    // gün
// sonuc = simdi.getDay();     // 0: pazar 6: cumartesi
// sonuc = simdi.getFullYear(); // yıl
// sonuc = simdi.getHours();   // saat
// sonuc = simdi.getTime();

// // Set Methods
// // simdi.setFullYear(2025);
// simdi.setMonth(7);          // 0: Ocak
// simdi.setDate(15);

// sonuc = simdi;

// let dogumTarihi = new Date(1990, 5, 15);

// sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

// let milisecond = simdi - dogumTarihi;
// let saniye = milisecond / 1000;     // saniye
// let dakika = saniye / 60;
// let saat = dakika / 60;
// let gun = saat / 24;

// sonuc = gun;

// console.log(sonuc);
// console.log(typeof sonuc);



var bugun = new Date();
var yil = bugun.getFullYear();
var ay = bugun.getMonth(); // Ocak 0, Şubat 1, ..., Aralık 11
var gun = bugun.getDate();
var saat = bugun.getHours();
var dakika = bugun.getMinutes();
var saniye = bugun.getSeconds();

console.log(`${yil}-${ay + 1}-${gun} ${saat}:${dakika}:${saniye}`);

var tarih1 = new Date(2022, 0, 1);
var tarih2 = new Date(2022, 11, 31);

var fark = tarih2 - tarih1;
console.log(fark / (1000 * 60 * 60 * 24) + " gün");

var tarih = new Date();
var biçimliTarih = tarih.toLocaleDateString("tr-TR");
var biçimliSaat = tarih.toLocaleTimeString("tr-TR");

console.log(`Biçimli Tarih: ${biçimliTarih}`);
console.log(`Biçimli Saat: ${biçimliSaat}`);




