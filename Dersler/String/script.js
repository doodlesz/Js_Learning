// JavaScript'te bir string, çift veya tek tırnak içine alınmış bir dizi karakterdir.

var metin1 = "Merhaba, dünya!";  // Çift tırnak içinde string
var metin2 = 'Bu da bir string.'; // Tek tırnak içinde string

// 1.String Birleştirme:
    //Stringleri birleştirmek için + operatörünü kullanabilirsiniz:
    var ad = "John";
    var soyad = "Doe";
    var tamAd = ad + " " + soyad;
    console.log(tamAd); // "John Doe"

//  2.String Uzunluğu:
    //length özelliği ile bir stringin uzunluğunu öğrenebilirsiniz:
    var metin = "JavaScript öğreniyorum.";
    console.log(metin.length); // 24

//  Karaktere Erişim:
    //String içindeki belirli bir karaktere erişmek için indeks kullanabilirsiniz. İndeksler 0'dan başlar:
    var metin = "Merhaba";
    console.log(metin[0]); // "M"
    console.log(metin[1]); // "e"

//  Alt Diziler (Substring):
    //substring yöntemi ile belirli bir aralıktaki karakterleri alabilirsiniz:
    var metin = "JavaScript";
    var anime = "Bankai";
    var altAnime=anime.substring(0,5);
    var altMetin = metin.substring(0, 4);
    console.log(altMetin); // "Java"
    console.log(altAnime);

//  String Karşılaştırma:
    //Stringler arasında karşılaştırma yapabilirsiniz:
    var str1 = "abc";
    var str2 = "def";
    console.log(str1 === str2); // false
