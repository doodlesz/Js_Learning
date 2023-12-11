// bir sayının 10 ile 50 arasında olup olmadığını kontrol edin.

// uygulama.js dosyası
var sayi = -60; // veya istediğiniz bir sayı

if(sayi>=10 && sayi<=50){
    console.log("Sayi 10 ile 50 arasindadir");
}else if(sayi<10){
    console.log("sayi 10'dan küçüktür.");
}else if(sayi>50){
    console.log("sayi 50'den büyüktür.");
}else if(sayi<10 && sayi>50){
    console.log("sayi 10 ile 50 arasinda degildir.");
}

// bir sayının pozitif olup olmadığını kontrol edin

var sayi1 = 0 ;

if(sayi1>0){
    console.log("sayi pozitiftir.")
}else if(sayi1<0){
    console.log("sayi negatiftir.")
}else{
    console.log("sayi sifirdir.")
}

// x y z ve sayılarının büyüklüğüne göre karşılaştırınız

var x = 4;
var y = 2;
var z = 3;

if(x>=y && x>=z){
    if(y>=x){
        console.log("Sıralama :"+x+","+y+","+z);
        console.log("Sıralama: " + x + ", " + y + ", " + z);
    }
}

