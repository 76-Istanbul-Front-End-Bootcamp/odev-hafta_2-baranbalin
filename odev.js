/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John" ciktisi verecek sekilde duzenleyiniz.
 */

var person = {
  name: "John",
  message: function () {    
    console.log("Hello, " + this.name);
  }
}

var messageFunc = person.message.bind(person);
messageFunc();


/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
var numbers = {
  numbers: [[10,20,30], 2],
  multiply: function(){
    this.numbers[0].map(function(number, numberIndex){
        const result = number * this.numbers[1];
        console.log(result)
    }.bind(this))
  }
};

numbers.multiply();


/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
*/
function isValidName(name) {
  if(typeof(name) !== "string" || name.length <= 1) return false
  let control = true
  let splitName = name.split("")
  for(let i in splitName){
    if(splitName[i] === " "){
      control= false
    }
  }
  return control
}


/*
  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/
function katilimSaati(dersSayisi, dersSaati){
  return isNaN(parseInt(dersSaati) * parseInt(dersSayisi)) || !isFinite(parseInt(dersSaati) * parseInt(dersSayisi)) ? false : parseInt(dersSaati) * parseInt(dersSayisi)
}

console.log(!!katilimSaati(6, 10) == true);
console.log(!!katilimSaati(6, "10") == true);
console.log(!!katilimSaati("6", 10) == true);
console.log(!!katilimSaati("6", "10") == true);
console.log(katilimSaati("", 6) === false);
console.log(katilimSaati(6, "") === false);
console.log(katilimSaati("", "") === false);
console.log(katilimSaati("foo", 6) === false);
console.log(katilimSaati(6, "foo") === false);
console.log(katilimSaati("foo", "bar") === false);
console.log(katilimSaati(null, null) === false);
console.log(katilimSaati(null, undefined) === false);
console.log(katilimSaati(undefined, null) === false);
console.log(katilimSaati(undefined, undefined) === false);
console.log(katilimSaati(Infinity, Infinity) === false);
console.log(katilimSaati(undefined, Infinity) === false);
console.log(katilimSaati(Infinity, undefined) === false);
console.log(katilimSaati(false, false) === false);
console.log(katilimSaati(false, true) === false);
console.log(katilimSaati(true, false) === false);
console.log(katilimSaati(true, true) === false);



