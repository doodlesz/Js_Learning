// Aritmetik Operatörler: //

// +: Toplama
// -: Çıkarma
// *: Çarpma
// /: Bölme
// %: Mod (bölme işleminden kalan)

var x = 10;
var y = 3;

var toplam = x + y;  // 13
var fark = x - y;    // 7
var carpim = x * y;  // 30
var bolum = x / y;   // 3.333...
var kalan = x % y;   // 1

// Atama Operatörü: //

// =: Değişkenlere değer atamak için kullanılır.

var e = 5;
var r = 10;

e = r;  // e'nın değeri şimdi 10 oldu

// Karşılaştırma Operatörleri:

// ==: Eşitse
// ===: Tam olarak eşitse (hem değer hem de tür)
// !=: Eşit değilse
// !==: Tam olarak eşit değilse (hem değer hem de tür)

var a = 5;
var b = "5";

console.log(a == b);   // true (değer kontrolü)
console.log(x === y);  // false (değer ve tür kontrolü)
console.log(x != y);   // false
console.log(x !== y);  // true

// Mantıksal Operatörler:

// &&: VE (and) //
// VE (&& - and) Operatörü:

// && operatörü, iki koşulun da doğru (true) olması durumunda bir ifadeyi doğru hale getirir.
// Örneğin, if (koşul1 && koşul2) ifadesi, hem koşul1 hem de koşul2 doğru olduğunda çalışır.

var havaGunesli = true;
var havaSicak = true;

if (havaGunesli && havaSicak) {
  console.log("Hava güneşli ve sıcak!");
}

// ||: VEYA (or) //
// VEYA (|| - or) Operatörü:

// || operatörü, iki koşuldan en az birinin doğru olduğu durumu kontrol etmeye yarar.
//  Örneğin, "Yağmur yağıyor veya kar yağıyor" dediğimizde, en az bir koşul doğru olmalıdır.

var yagmurYagiyor = false;
var karYagiyor = true;

if (yagmurYagiyor || karYagiyor) {
  console.log("Yağmur yağıyor veya kar yağıyor!");
}

// !: DEĞİL (not) //
// DEĞİL (! - not) Operatörü:

// ! operatörü, bir koşulun tam tersini alır. 
// Örneğin, "Lamba açık değilse" dediğimizde, lamba kapalı olmalıdır.

var lambaAcik = false;

if (!lambaAcik) {
  console.log("Lamba kapalı!");
}

