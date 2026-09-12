/*
A var a JavaScript eredeti változója. 
Nagyon megengedő, ami miatt könnyű vele hibát véteni. 
Ha egy blokkon (például egy if feltételen vagy for cikluson) belül hozod létre, a blokkon kívül is látható marad.
*/ 

var nev = "Péter";
var nev = "Gábor"; // Szabályos! Újra lehet deklarálni, ami veszélyes.

if (true) {
    var x = 10;
}


document.write(x)
document.write("<br>") // Kijelzi: 10 (Kiszökött az IF blokkból!)
document.write(kor); // Kijelzi: undefined (a hoisting miatt nem dob hibát)
var kor = 30;

/*
A let a var modern javítása. 
Csak abban a blokkban ({ } között) létezik, ahol létrehoztad. 
Nem engedi, hogy véletlenül kétszer deklaráld ugyanazt a változót, de az értékét később módosíthatod.
*/

let gyumolcs = "Alma";
// let gyumolcs = "Körte"; // HIBÁT DOB! Nem deklarálhatod újra.

gyumolcs = "Banán"; // Szabályos! Az értéke módosítható.

if (true) {
    let y = 20;
}
// console.log(y); // HIBÁT DOB! y nem létezik a blokkon kívül.

// console.log(ar); // HIBÁT DOB! (Hoisting miatt nem érhető el a deklaráció előtt)
let ar = 100;


/*
A const (konstans) pontosan úgy működik, mint a let, de egy szigorú megkötéssel: 
kötelező azonnal értéket adni neki, és ezt az értéket később nem lehet felülírni (reassignolni).
*/

const PI = 3.14;
// PI = 3.15; // HIBÁT DOB! Konstans értékét nem változtathatod meg.

// const nev; // HIBÁT DOB! Kötelező azonnal értéket adni neki.


/*
Ha a const-nak egy objektumot vagy tömböt adsz meg, magát az objektumot nem cserélheted ki, de a tartalmát (tulajdonságait) módosíthatod!
*/

const kosár = ["alma", "banán"];
kosár.push("narancs"); // SZABÁLYOS! A tömb tartalma változhat.

// kosár = ["új", "tömb"]; // HIBÁT DOB! Magát a tömböt nem cserélheted le egy másikra.
