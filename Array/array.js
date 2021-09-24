const first = [];
const second = new Array();

let painters = [
    'Goya', 'Greco', 'Picasso', 'Klimt', 'Schiele', 'Rivera', 'Velázquez', 'Baicon', 'Pollock', 'Rothko', 'Gris', 'Caravaggio', 'Warhol', 'Basquiat'
];

/* .forEach */

/* document.write('<ul>'); */
painters.forEach(function(onepainter, index){
    document.write(`<h2>${index}- ${onepainter}</h2>`);
}); 
/* document.write('<ul>'); *//* funciona anonima, solo se ejecuta aquí */


/* MAP */
let numbers = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let numbertwo = numbers.map(function(n){
    return n*2;
});
document.write(`${numbers} <br/> ${numbertwo}`);

/* .includes (incluye o no) bool */

document.write('<br/>'+painters.includes('Greco'));

/* .filter nuevo arreglo con valores que son true */

let five = numbers.filter(function(n){
    if(n == 5){
        return n;
    }
});

document.write('<br/>'+five);

/* RANGE */
let arrayDiego = [];
for (let i = 0; i < 10; i++) {
    arrayDiego.push(i);
};

document.write('<br/>'+arrayDiego);