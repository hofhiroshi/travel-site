var $ = require('jquery')

// require is part of node.js, not javascript
// inporting Person Modele by 'require' syntax (Old Style)

// Conventional Style to import module
// var Person = require('./modules/Person');

// ES6 new style to import module
import Person from './modules/Person';



class Adult extends Person {
    payTaxes() {
        console.log (this.name + "now owes $0 in taxes.");
    }
}

alert("watch test");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "red");
jane.greet();
jane.payTaxes();  

$("h1").remove();

