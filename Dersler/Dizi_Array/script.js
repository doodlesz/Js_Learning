///// Diziler, birden çok değeri tek bir değişken içinde saklamak için kullanılır. İşte temel dizilerle ilgili bilgiler: /////

//Dizi Oluşturma:
    //Dizi oluşturmak için [] köşeli parantezleri kullanabiliriz:

    var sayilar = [1, 2, 3, 4, 5];
    var meyveler = ["Elma", "Armut", "Çilek"];
    var karisik = [1, "İki", true, [3, 4]];

//Dizi Elemanlarına Erişim:
    //Dizi elemanlarına sıfırdan başlayarak indeksleme yaparak erişebiliriz:

    console.log(sayilar[0]); // 1
    console.log(meyveler[1]); // Armut
    console.log(karisik[3][0]); // 3

//Dizi Uzunluğu:
    //Dizi uzunluğunu length özelliği ile öğrenebiliriz:

    console.log(sayilar.length); // 5
    console.log(meyveler.length); // 3

//Dizi Elemanlarını Değiştirme:
    //Dizi elemanlarını indeksleme ile değiştirebiliriz:

    sayilar[2] = 10;
    console.log(sayilar); // [1, 2, 10, 4, 5]

//Diziye Eleman Ekleme ve Silme:
    //Dizi sonuna eleman eklemek için push kullanabiliriz, son elemanı silmek için pop kullanabiliriz:

    meyveler.push("Muz");
    console.log(meyveler); // ["Elma", "Armut", "Çilek", "Muz"]

    var silinenMeyve = meyveler.pop();
    console.log(meyveler); // ["Elma", "Armut", "Çilek"]
    console.log("Silinen Meyve: " + silinenMeyve); // Muz

//Dizi Döngüleri:
    //Diziyi dönmek için for veya forEach gibi döngüler kullanabiliriz:

    for (var i = 0; i < meyveler.length; i++) {
        console.log(meyveler[i]);
      }
      
      // veya
      
      meyveler.forEach(function (meyve) {
        console.log(meyve);
      });

      //Bu döngü, meyveler dizisindeki her elemanı ekrana yazdıracaktır.

        //var i = 0: Döngü değişkenini (indeks) başlatıyoruz.
        //i < meyveler.length: Döngünün devam edeceği koşul. length dizinin uzunluğunu verir.
        //i++: Her döngü adımında i'yi bir artırır.

        //2. forEach Fonksiyonu:
        //forEach fonksiyonu, her eleman için belirtilen bir işlevi çalıştırır. Bu, genellikle daha okunabilir ve kısa bir syntax sunar.



