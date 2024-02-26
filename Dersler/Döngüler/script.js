let sayilar = [1,5,7,15,3,25,12,24];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.


for(i=0; i<sayilar.length; i++){
  let kare = sayilar[i]*sayilar[i]
  
}

// for (let sayi of sayilar) {
//     console.log(sayi * sayi);
// }

// 2- sayilar listesindeki hangi sayılar 5' in katıdır?


for (i=0; i<sayilar.length; i++){
    if(sayilar[i]%5 == 0){
        console.log("5'in Kati Sayilar : "+ sayilar[i]);
    }else{
        console.log("Besin kati olmayan Sayilar : "+ sayilar[i])
    }
}






// for(let i=0; i<sayilar.length; i++) {
//     if(sayilar[i] % 5 == 0) {
//         console.log(sayilar[i]);
//     }
// }

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.

let ciftsayitoplam=0;
for(i=0; i<sayilar.length; i++){
    if(sayilar[i]%2 == 0){
        ciftsayitoplam+=sayilar[i];
      
    }
}
console.log(ciftsayitoplam);



// let toplam = 0;
// for(let i in sayilar) {
//     if (sayilar[i]%2==0) {
//         toplam += sayilar[i];
//     }
// }
// console.log(toplam);

let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23","samsung s20"];

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.



for(j=0; j<urunler.length; j++){
   buyult=urunler[j].toLowerCase();
    console.log(buyult);
}

// for(let urun of urunler) {
//     console.log(urun.toUpperCase());
// }

// 5- urunler listesinde samsung geçen kaç ürün vardır?
adet=0;
for(i=0; i<urunler.length; i++){
    adet++
}
console.log(adet);




// let adet = 0;

// for(let urun of urunler) {
//     if(urun.includes("samsung")) {
//         adet++;
//     }
// }

// console.log(adet);

// let ogrenciler = [
//     {"ad":"yiğit", "soyad": "bilgi", "notlar": [60,70,60]},
//     {"ad":"ada", "soyad": "bilgi", "notlar": [80,70,80]},
//     {"ad":"çınar", "soyad": "turan", "notlar": [10,20,60]}
// ];

// // ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

// for(let ogrenci of ogrenciler) {
//     let not_toplam = 0;
//     let ortalama = 0;
//     let adet = 0;
//     for(let not of ogrenci.notlar) {
//         not_toplam += not;
//         adet++;
//     }
//     ortalama = not_toplam / adet;

//     console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencimnin not ortalaması : ${ortalama}.`);

//     if(ortalama>=50) {
//         console.log("başarılı.");
//     } else {
//         console.log("başarısız.");
//     }    
// }

// tüm öğrencilerin not ortalaması kaçtır?


let ogrenciler = [
    {"ad":"yiğit", "soyad": "bilgi", "notlar": [60,70,60]},
    {"ad":"ada", "soyad": "bilgi", "notlar": [80,70,80]},
    {"ad":"çınar", "soyad": "turan", "notlar": [10,20,60]}
];

let toplamNot = 0;
let toplamOgrenciSayisi = ogrenciler.length;

for (let ogrenci of ogrenciler) {
    let not_toplam = 0;

    for (let not of ogrenci.notlar) {
        not_toplam += not;
    }

    toplamNot += not_toplam;
}

let ortalama = toplamNot / (toplamOgrenciSayisi * ogrenciler[0].notlar.length);
console.log("Tüm öğrencilerin not ortalaması: " + ortalama);

