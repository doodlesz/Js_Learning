// for (i=0; i<=7; i++){
//     let satir="";
//    for(j=0; j<=i; j++){
//     satir+="#";
//    }
//    console.log(satir);
// }
let countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
    
];
// let ulkeler=[];
// let karektersayisi=[];
// let butun=[]

// for(let ulke of countries){
//     // ulkeler.push(ulke);
//     let harf3=ulke.substring(0,3);
//     butun.push(ulke);
//     butun.push(harf3);

//     // karektersayisi.push(ulke.length);
//     butun.push(ulke.length);
    

// }
// ulkelerkarekter=[ulkeler[0].length,ulkeler[1].length,ulkeler[2].length,ulkeler[3].length,ulkeler[4].length,ulkeler[5].length,ulkeler[6].length,ulkeler[7].length,ulkeler[8].length,ulkeler[9].length,ulkeler[10].length]
// console.log(ulkeler,);
// console.log(ulkelerkarekter);
// console.log(karektersayisi);
// console.log(harf3);
// console.log(butun);
let ıaIcerenUlkeler = [];
let ıaIcermeyenUlkeler= [];

for (let ulke of countries) {
    if (ulke.includes('ia')) {
        ıaIcerenUlkeler.push(ulke);
    }else{
        ıaIcermeyenUlkeler.push(ulke);
    }
}
if(ıaIcerenUlkeler.length>0){
    console.log("Kelimeyi içeren Ülkeler: ",ıaIcerenUlkeler);
}
if(ıaIcermeyenUlkeler.length>0){
    console.log("kelimeyi içermeyen ülkeler: ",ıaIcermeyenUlkeler);
}

let maxuzunluk = 0;
let ulkeuzunlugu= "";

for(i=0; i<countries.length; i++){
    if(countries[i].length>maxuzunluk){
        maxuzunluk=countries[i].length
        ulkeuzunlugu=countries[i];
    }

}
console.log("en fazla ulke harfi içeren ulke:", ulkeuzunlugu);

let targetLength = 5;
let countryWithTargetLength = [];

for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === targetLength) {
        countryWithTargetLength.push(countries[i]);
        
    }
}

console.log(`Tam olarak ${targetLength} karakter içeren ülke: ${countryWithTargetLength}`);



let webTechs = ["HTML", "CSS", "JavaScript", "Python", "Django", "Ruby", "Ruby on Rails", "PHP", "Laravel", "Java", "Spring", "C#", ".NET"];

let groupedTechs = [];
let currentGroup = [];

for (let tech of webTechs) {
    if (tech === "HTML" || tech === "CSS" || tech === "JavaScript") {
        if (currentGroup.length > 0) {
            groupedTechs.push(currentGroup);
            currentGroup = [];
        }
    }
    currentGroup.push(tech);
}

if (currentGroup.length > 0) {
    groupedTechs.push(currentGroup);
}

console.log(groupedTechs);
