// bir sayının 10 ile 50 arasında olup olmadığını kontrol edin.

// uygulama.js dosyası
var sayi = -60; // veya istediğiniz bir sayı

if(sayi>=10 && sayi<=50){
    console.log("Sayi 10 ile 50 arasindadir");
}else if(sayi<10){
    console.log("sayi 10'dan küçüktür.");
}else if(sayi>50){
    console.log("sayi 50'den büyüktür.");
}else if(sayi<10 && sayi>50){
    console.log("sayi 10 ile 50 arasinda degildir.");
}

// bir sayının pozitif olup olmadığını kontrol edin

var sayi1 = 0 ;

if(sayi1>0){
    console.log("sayi pozitiftir.")
}else if(sayi1<0){
    console.log("sayi negatiftir.")
}else{
    console.log("sayi sifirdir.")
}

// x y z ve sayılarının büyüklüğüne göre karşılaştırınız

var x = 2;
var y = 3;
var z = 4;


if(x>y && x>z && y>z){
    // x y z
    console.log("Sıralama:"+x+","+y+","+z);
}else if(x>y && x>z && z>y){
    console.log("Sıralama:"+x+","+z+","+y);
    // X Z Y
}else if(y>x && y>z && x>z){
    console.log("Siralama:"+y+","+x+","+z);
    // y x z
}else if(y>x && y>z && z>x){
    console.log("Siralama:"+y+","+z+","+x);
    // y z x
}else if(z>x && z>y && x>y){
    console.log("Siralama:"+z+","+x+","+y);
}else if(z>x && z>y && y>x){
    console.log("Siralama:"+z+","+y+","+x);
}


// if(x>y && x>z){
//     // X en büyük
//     if(y>z){
//         // Y Ortanca
//     }else{
//         // Z Ortanca
//     }
// }else{
//     if(y>z && y>x){
//         //Y En Büyük
//         if(x>z){
//             //X Ortanca
//         }else{
//             //Z Ortanca
//         }
//     }else{
//         if(z>x && z>y){
//             // Z En Büyük
//             if(x>y){
//                 // X Ortanca
//             }else{
//                 // Y Ortanca
//             }
//         }
//     }
// }


// 2 vize olacak vizde yüzdesi %40 ve 1 final olacak %60 olacak yüzdesi bunların ortalaması alınacak.
    // eğer ortalama 50'nin üstündeyse dersi geçti.
    // geçmek için ortalaması en az 50 bile olsa finalın en az 50 olmalıdır.
    // final ortalaması 70 olduğunda vize ortalaması 50 nin altındaysa bile geçsin.


var vize1=20;
var vize2=20;
var final=90;

var vizeortalama=vize1*0.4+vize2*0.4;
var finalortalama=final*0.4;
var notortalaması=vizeortalama+finalortalama;

console.log(notortalaması);

if(notortalaması>50){
    if(final>=70 && vizeortalama<=50){
        console.log("final sayesinde geçti.");
    }
console.log("sinifi geçtiniz");
}