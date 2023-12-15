//push() ve pop() Metodları:

    //push(): Dizinin sonuna bir veya daha fazla öğe ekler.
    //pop(): Dizinin sonundaki öğeyi kaldırır.
    var meyveler = ["Elma", "Armut", "Çilek"];

    meyveler.push("Muz");
    console.log(meyveler); // ["Elma", "Armut", "Çilek", "Muz"]

    var silinenMeyve = meyveler.pop();
    console.log(meyveler); // ["Elma", "Armut", "Çilek"]
    console.log("Silinen Meyve: " + silinenMeyve); // Muz

//unshift() ve shift() Metodları:

    //unshift(): Dizinin başına bir veya daha fazla öğe ekler.
    //shift(): Dizinin başındaki öğeyi kaldırır.

    var meyveler = ["Elma", "Armut", "Çilek"];

    meyveler.unshift("Muz");
    console.log(meyveler); // ["Muz", "Elma", "Armut", "Çilek"]
    
    var silinenMeyve = meyveler.shift();
    console.log(meyveler); // ["Elma", "Armut", "Çilek"]
    console.log("Silinen Meyve: " + silinenMeyve); // Muz

//indexOf() ve lastIndexOf() Metodları:

    //indexOf(): Belirli bir öğenin dizideki ilk indeksini döndürür. Bulamazsa -1 döner.
    //lastIndexOf(): Belirli bir öğenin dizideki son indeksini döndürür.
    
    var meyveler = ["Elma", "Armut", "Çilek", "Armut"];

    console.log(meyveler.indexOf("Armut")); // 1
    console.log(meyveler.lastIndexOf("Armut")); // 3

//slice() Metodu:

    //Belirli bir kısmı (dilim) kopyalar.
    
    var meyveler = ["Elma", "Armut", "Çilek", "Muz", "Üzüm"];

    var dilim = meyveler.slice(1, 4);
    console.log(dilim); // ["Armut", "Çilek", "Muz"]

//splice() Metodu:

    //Belirli bir indeksten başlayarak belirli sayıda öğeyi kaldırır veya ekler.

    var meyveler = ["Elma", "Armut", "Çilek", "Muz", "Üzüm"];

    meyveler.splice(2, 1); // 2. indeksten itibaren 1 öğeyi kaldır
    console.log(meyveler); // ["Elma", "Armut", "Muz", "Üzüm"]

    meyveler.splice(1, 0, "Kivi", "Portakal"); // 1. indekse Kivi ve Portakal ekle
    console.log(meyveler); // ["Elma", "Kivi", "Portakal", "Armut", "Muz", "Üzüm"]


