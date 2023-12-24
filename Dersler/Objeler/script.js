//JavaScript'te bir nesne, özellikleri (properties) ve metotları (methods) içeren bir veri yapısıdır.
//Özellikler genellikle "anahtar-değer" çiftleri şeklinde tanımlanır. Örnek bir nesne şu şekilde olabilir:

var arabam = {
    marka: "Toyota",
    model: "Corolla",
    yil: 2022,
    renk: "Beyaz",
  
    ozellikleriGoster: function() {
      console.log("Marka: " + this.marka);
      console.log("Model: " + this.model);
      console.log("Yıl: " + this.yil);
      console.log("Renk: " + this.renk);
    }
  };
 
 // Bu örnekte, arabam adında bir nesne oluşturduk ve bu nesnenin özellikleri (marka, model, yil, renk) ve bir metodu (ozellikleriGoster) bulunuyor.  

// Nesne Oluşturma ve Özelliklere Erişim:

// Nesne özelliklerine erişim
console.log(arabam.marka); // Toyota
console.log(arabam.yil); // 2022

// Nesne metodu çağırma
arabam.ozellikleriGoster();

//Burada, arabam nesnesinin özelliklerine nokta (.) notasyonuyla erişebiliriz. Örneğin, arabam.marka bize arabanın markasını verir.

// Yeni Nesne Özellikleri Eklemek:

arabam.yakitTuru = "Benzin";
console.log(arabam.yakitTuru); // Benzin
//Nesne oluşturduktan sonra, daha sonra özellikler ekleyebiliriz.

//Nesne Metodu Tanımlamak:
arabam.calistir = function() {
    console.log("Araba çalıştı!");
  };
  
  arabam.calistir(); // Araba çalıştı!
//Nesnelere metot eklemek de oldukça yaygındır.  
