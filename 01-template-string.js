const name = prompt("tell me your name:");
const age = parseInt(prompt("how old are you?"));

console.log('Hi '+name+', wellcome. You have '+age+'years old.');

const hello = `<h2>Hi ${name}, wellcome. You have ${age} years old.</h2>`;
/* notece que se usan comillas inclinadas (``) */

document.write(hello);