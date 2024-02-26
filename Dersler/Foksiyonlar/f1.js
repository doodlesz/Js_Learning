// Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan foksiyonu yapınız.
function kelimeYazdir(kelime,adet){
    for(i=0; i<adet; i++){
        console.log(kelime);
    }
}
// kelimeYazdir("merhaba",4)

//Dikdörtgenin alan ve çevresini hesaplayan foksiyonu yapınız.
function kenarhesapla(kısakenar,uzunkenar){
    let alan=kısakenar*uzunkenar
    let cevre=(kısakenar+uzunkenar)*2

    return ("alan: " +alan+ "cevre: " + cevre)
}
let sonuc = kenarhesapla(7,10)
// console.log(sonuc);

//Yazı tura uygulamasını foksiyon kullanarak yapınız.
function yazituraAt(){
    let random = Math.random()

    if(random < 0.5){
        console.log("yazı");
    }else{
        console.log("tura");
    }
    console.log(random)
}
yazituraAt()


//Kendisine gönderilen bir sayının tam bölenlerini bir dizi şeklinde döndüren bir foksiyon yapınız.

function tamBolen(sayi){
    let sayilar=[]
    
    for(i=2; sayilar<i; i++){
        if(sayi % i == 0){
            sayilar.push(i)
        }
    }
    return sayilar
}

// console.log(tamBolen(10));
// console.log(tamBolen(15));


//Değişken sayıda parametre alan toplam isminde bir foksiyon yapınız.

function toplam(){
    let sonuc = 0 ;

    for(let i = 0; i< arguments.length; i++){
        sonuc += arguments[i];
    }

    return sonuc;
}
console.log(toplam(2,5));
console.log(toplam(2,5,7));

