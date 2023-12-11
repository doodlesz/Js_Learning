//// IF ELSE KOŞULLARI ////
// if ve else ifadeleri, belirli bir koşulun doğru veya yanlış olmasına bağlı olarak belirli bir bloğun çalışmasını sağlar.

var saat = 10;

if (saat < 12) {
    console.log("Günaydın!");
} else {
    console.log("İyi günler!");
}

// Bu örnekte, if ifadesi saat 12'den küçükse "Günaydın!" mesajını, aksi halde (else) "İyi günler!" mesajını ekrana yazdıracaktır.

    // 1. if ifadesi, içine yazılan koşulu kontrol eder. Eğer koşul doğruysa, içindeki bloğu çalıştırır.
    // 2. else ifadesi, if koşulu yanlışsa çalıştırılacak bloğu belirtir.
    // 3. else if ifadesiyle birden fazla koşulu kontrol edebilirsin. 
     var not = 60;

    if (not >= 90) {
        console.log("Notunuz A");
    } else if (not >= 80) {
        console.log("Notunuz B");
    } else if (not >= 70) {
        console.log("Notunuz C");
    } else {
        console.log("Notunuz F");
    };

    // Bu örnekte, notlara göre öğrencinin aldığı harf notunu belirleyen bir kontrol yapısı var. 
    // else if ifadeleri, sırayla kontrol edilir ve ilk doğru koşulun bulunduğu blok çalıştırılır.
    // Eğer hiçbir koşul sağlanmazsa, else bloğu çalışır.

    ///////////// IF ELSE UYGULAMA //////////////
    //// Sıcaklık Kontrolü ////
    var sicaklik = 10 ;

    if (sicaklik >= 25 ){
        console.log("Hava Tam Motor Surmelik");
    }else{
        console.log("Sakin Disari Cikma");
    }
    //// Kullanıcı Kontrolü ////
    var kullaniciadi="admin";
    var sifre=123;

    if(kullaniciadi==="admin" && sifre===1234){
        console.log("Giris Yapildi.");
    }else if(kullaniciadi !=="admin"){
        console.log("Kullanici Adi Yanlis Girildi.");
    }else if(sifre !==1234){
        console.log("Sifre Yanlis Girildi.")
    }else{
        console.log("Giris Basarisiz.")
    }

    /// Yas Kontrolü ///

    var yas = 17;

    if(yas>=18){
        console.log("İçeriği görüntülemek için tıklayınız.");
    }else{
        console.log("İçeriği görüntülemek için büyüyünüz");
    }
   

    