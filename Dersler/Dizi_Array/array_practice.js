// 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.

let meyveler=["Elma","Armut","Muz","Çilek"];

// 2- Dizi kaç elemanlıdır?
console.log(meyveler.length);


// 3- Dizinin ilk ve son elemanı nedir?
console.log(meyveler[0]);
console.log(meyveler[meyveler.length-1]);


// 4- Elma dizinin bir elemanımıdır?

var elmaVarmi = meyveler.includes("Elma");
console.log(elmaVarmi);


// 5- Kiraz meyvesini listenin sonuna ekleyiniz.

var kirazsonaekle = meyveler.push("Kiraz");
console.log(meyveler);

// meyveler[meyveler.length] = "Kiraz";


// 6- Dizinin son 2 elemanını siliniz.

var meyvesil1=meyveler.pop();
var meyvesil2=meyveler.pop();
console.log(meyveler);


// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
    /*
        Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
        Öğrenci 2: Ada Bilgi 2012   (80,80,90)
        Öğrenci 3: Ahmet  2009 (60,60,70)
    */

let ogr1= ["Yigit","Bilgi",2010,[70,60,80]];
let ogr2= ["Ada","Bilgi",2012,[80,80,90]];
let ogr3= ["Ahmet","Bilgi",2009,[60,60,70]];

let ogr1yasi=new Date().getFullYear() - ogr1[2];
let ogr2yasi=new Date().getFullYear() - ogr2[2];
let ogr3yasi=new Date().getFullYear() - ogr3[2];

console.log(ogr1yasi,ogr2yasi,ogr3yasi);

let ogr1not=(ogr1[3][0]+ ogr1[3][1] + ogr1[3][2])/3;
let ogr2not=(ogr2[3][0]+ ogr2[3][1] + ogr2[3][2])/3;
let ogr3not=(ogr3[3][0]+ ogr3[3][1] + ogr3[3][2])/3;



console.log(`Adi ve Soyadi:${ogr1[0]} ${ogr1[1]} Yasi ${ogr1yasi} ve not ortalamasi: ${ogr1not}`);
console.log(`Adi ve Soyadi:${ogr2[0]} ${ogr2[1]} Yasi ${ogr2yasi} ve not ortalamasi: ${ogr2not}`);
console.log(`Adi ve Soyadi:${ogr3[0]} ${ogr3[1]} Yasi ${ogr3yasi} ve not ortalamasi: ${ogr3not}`);


















// let ogr1 = [
//     "Yiğit",
//     "Bilgi",
//     2010,
//     [70,60,80]
// ];

// let ogr2 = [
//     "Ada",
//     "Bilgi",
//     2012,
//     [80,80,90]
// ];

// let ogr3 = [
//     "Ahmet",
//     "Turan",
//     2009,
//     [60,60,70]
// ];

// let ogrenciler = [ogr1, ogr2, ogr3];

// let yigit_yas =  new Date().getFullYear() - ogrenciler[0][2];
// let ada_yas =  new Date().getFullYear() - ogrenciler[1][2];
// let ahmet_yas =  new Date().getFullYear() - ogrenciler[2][2];

// let yigit_not = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
// let ada_not = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
// let ahmet_not = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;

// console.log(yigit_not.toFixed(1), ada_not.toFixed(1), ahmet_not.toFixed(1));
