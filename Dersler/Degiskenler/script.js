// String (Metin):
//String, metinsel verileri temsil eden bir veri türüdür. 
//Bir string, tek tırnak ('), çift tırnak (") veya şablon dizisi (template literal) içinde tanımlanabilir.
var isim = "Ahmet";

// Number (Sayı):
// Number, sayıları temsil eden bir veri türüdür. 
// Hem tam sayılar hem de ondalık sayılar bu türde temsil edilir.
var yas = 25;
var ortalama = 3.14;

//Boolean (Mantıksal):
// Boolean, true veya false değerlerini temsil eden bir veri türüdür.
var dogruMu = true;
var yanlisMi = false;

// Array (Dizi):
// Dizi, bir dizi (liste) veriyi içinde barındıran bir veri türüdür. Diziler köşeli parantez ([]) içinde tanımlanır.
var renkler = ['kırmızı', 'yeşil', 'mavi'];
var sayilar = [1, 2, 3, 4, 5];

// Object (Objeler):
// Obje, özellik (property) ve değer (value) çiftlerini içeren bir veri yapısıdır. Objeler süslü parantez ({}) içinde tanımlanır.

var ogrenci = {
    ad: 'Ali',
    yas: 20,
    okul: 'ABC Lisesi'
  };

//  Undefined (Tanımsız):
//   Bir değişkenin henüz değer atanmamışsa varsayılan olarak undefined değerini alır.
var degisken;
console.log(degisken); // undefined

// Null (Boş):
// null, bir değişkenin bilinçli olarak boş olduğunu belirtmek için kullanılır.

var bosDeger = null;

// Symbol (Sembol):
// Symbol, eşsiz ve değiştirilemez bir veri türüdür. Genellikle nesne özellikleri oluşturmak için kullanılır.

var sembol = Symbol('benzersiz');


///////////////// DEĞİŞKEN TÜRLERİ UYGULAMASI ////////////////////

// İki sayı değişkeni
var sayi1 = 10;
var sayi2 = 5;

// Toplama
var toplam = sayi1 + sayi2;
console.log("Toplam: " + toplam);

// Çıkarma
var fark = sayi1 - sayi2;
console.log("Fark: " + fark);

// Çarpma
var carpim = sayi1 * sayi2;
console.log("Çarpım: " + carpim);

// Bölme
var bolum = sayi1 / sayi2;
console.log("Bölüm: " + bolum);
