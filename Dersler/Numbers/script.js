//Tam Sayılar (Integers):
    //Tam sayılar, kesirli olmayan pozitif veya negatif sayılardır. Örneğin:
    var tamSayi = 42;
//Ondalık Sayılar (Floats):
    //Ondalık sayılar, kesirli veya ondalık kısmı olan sayılardır. Örneğin:
    var ondalikSayi = 3.14;
//Temel Matematik İşlemleri:
    //JavaScript, sayılarla yapılan temel matematik işlemlerini destekler: toplama (+), çıkarma (-), çarpma (*), bölme (/).
    var sayi1 = 10;
    var sayi2 = 5;

    var toplam = sayi1 + sayi2; // 15
    var fark = sayi1 - sayi2;   // 5
    var carpim = sayi1 * sayi2; // 50
    var bolum = sayi1 / sayi2;  // 2


//Mod (Kalan) İşlemi:
    //% operatörü, bir sayının diğerine bölünmesinden kalanı verir.
    var kalan = 10 % 3; // 1 (10'u 3'e böldüğümüzde kalan)


//Artırma ve Azaltma Operatörleri:
    //++ ve -- operatörleri, bir sayıyı bir artırma veya bir azaltma işlemi yapar.
    var sayi = 5;
    sayi++; // sayi şimdi 6
    sayi--; // sayi şimdi 5


//toFixed() Metodu:
    //Bu metod, bir ondalık sayının belirli bir sayıda ondalık basamağa yuvarlanmasını sağlar.
    var ondalikSayi = 3.14159;
    var yuvarlanmisSayi = ondalikSayi.toFixed(2);
    console.log(yuvarlanmisSayi); // 3.14


//parseInt() ve parseFloat() Metotları:
    //Bu metotlar, bir stringi sayıya dönüştürmek için kullanılır
    var metin = "42";
    var sayi = parseInt(metin);
    console.log(sayi); // 42

    var ondalikMetin = "3.14";
    var ondalikSayi = parseFloat(ondalikMetin);
    console.log(ondalikSayi); // 3.14
//parseInt tam sayılara dönüştürürken, parseFloat ondalık sayılara dönüştürür.


//isNaN() Metodu:
    //Bu metod, bir değerin sayı olup olmadığını kontrol eder. Eğer sayı ise false, değilse true döndürür.
    var sayi = 42;
    console.log(isNaN(sayi)); // false

    var metin = "Merhaba";
    console.log(isNaN(metin)); // true


//Math Nesnesi:
    //Math nesnesi, sayılar üzerinde matematiksel işlemler yapmak için bir dizi metod içerir.
    var sayi = -4.75;

    console.log(Math.abs(sayi)); // 4.75 (mutlak değer)
    console.log(Math.ceil(sayi)); // -4 (yukarı yuvarlama)
    console.log(Math.floor(sayi)); // -5 (aşağı yuvarlama)
    console.log(Math.round(sayi)); // -5 (en yakın tamsayıya yuvarlama)
    console.log(Math.max(2, 5, 1, 8)); // 8 (en büyük sayı)
    console.log(Math.min(2, 5, 1, 8)); // 1 (en küçük sayı)



// sonuc = 10;
// sonuc = "10";
// sonuc = Number("10");
// sonuc = parseInt("10.6");
// sonuc = parseFloat("10.6");
// sonuc = parseInt("10a");
// sonuc = parseInt("a10");

// sonuc = isNaN("10");

// let sayi = 15.12355467;

// sonuc = sayi.toPrecision(5);
// sonuc = sayi.toFixed(5);

// sonuc = Math.round(2.4);
// sonuc = Math.round(2.6);
// sonuc = Math.ceil(2.2);
// sonuc = Math.floor(2.6);
// sonuc = Math.sqrt(25);
// sonuc = Math.pow(2,3);
// sonuc = Math.abs(-10);
// sonuc = Math.min(4,6,8,3,9);
// sonuc = Math.max(4,6,8,3,9);
// sonuc = Math.floor(Math.random() * 100) + 50;

// console.log(typeof sonuc);
// console.log(sonuc);