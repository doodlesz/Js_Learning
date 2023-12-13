//length:
    //Bir stringin uzunluğunu döndürür.
    var metin = "Merhaba";
    console.log(metin.length); // 7

//toUpperCase ve toLowerCase:
    //toUpperCase, bir stringin tüm karakterlerini büyük harfe çevirir. toLowerCase ise küçük harfe çevirir.
    var metin = "Merhaba";
    console.log(metin.toUpperCase()); // "MERHABA"
    console.log(metin.toLowerCase()); // "merhaba"

//charAt ve charCodeAt:
    //"charAt" belirli bir indeksteki karakteri döndürür. charCodeAt ise belirli bir indeksteki karakterin Unicode değerini döndürür.
   
    var metin = "Merhaba";
    console.log(metin.charAt(0)); // "M"
    console.log(metin.charCodeAt(0)); // 77

//substring ve slice:
    //substring belirli bir aralıktaki karakterleri alır. 
    //slice ise belirli bir aralığı alır, ancak negatif indeksler kullanarak sondan başlamak da mümkündür.

    var metin = "JavaScript";
    console.log(metin.substring(0, 4)); // "Java"
    console.log(metin.slice(-6)); // "Script"

//indexOf ve lastIndexOf:
    //indexOf belirli bir alt dizgiyi arar ve ilk bulduğu indeksi döndürür. 
    //lastIndexOf ise sondan başlayarak arar ve son bulduğu indeksi döndürür.

    var metin = "JavaScript öğreniyorum.";
    console.log(metin.indexOf("öğreniyorum")); // 11
    console.log(metin.lastIndexOf("a")); // 18

//replace:
    //Belirli bir alt dizgiyi başka bir alt dizi ile değiştirir.

    var metin = "Merhaba, dünya!";
    var yeniMetin = metin.replace("Merhaba", "Selam");
    console.log(yeniMetin); // "Selam, dünya!"


  
