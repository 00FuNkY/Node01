const nameCampus = require('./information.js');
let cowsay = require("cowsay")

console.log(cowsay.say({
    text : `My name is ${nameCampus.name} and I'm in ${nameCampus.campus}`,
    e : "oO",
    T : "U"
}))