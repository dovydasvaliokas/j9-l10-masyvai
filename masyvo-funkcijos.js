const skaiciai = [];     // tuščias masyvas
console.log(skaiciai);

skaiciai.push(4);
console.log(skaiciai);

skaiciai.push(7, 6, 12, -7, -84, 0, 0, 3, 7.5);
console.log(skaiciai);

skaiciai.pop();     // išimu paskutinį
skaiciai.pop();     // dar kartą išimu paskutinį 
console.log(skaiciai);

skaiciai.shift();       // išima patį pirmą elementą
console.log(skaiciai);

skaiciai.unshift(3, 6, 9, -7);      // šiuos skaičius įdeda į priekį
console.log(skaiciai);

let skaiciuSuma = masyvoSuma(skaiciai);
console.log(skaiciuSuma);
console.log(`Masyvo "skaiciai" suma yra: ${masyvoSuma(skaiciai)}`);


function masyvoSuma(masyvas) {
    let suma = 0;
    for (let i = 0; i < masyvas.length; i++) {
        const elementas = masyvas[i];
        suma += elementas;
        // suma += masyvas[i];
    }
    return suma;
}