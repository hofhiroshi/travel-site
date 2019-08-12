// ES6 style 
class Person {
    constructor(fullName, favColor){
        this.name = fullName;
        this.favoriteColor = favColor; 
    }

    greet() {
        console.log("my name is" + this.name + " and my favorite color is " + this.favoriteColor +".");
    }
} 

// ES5 style 
/* function Person(fullName, favcolor) {
    this.name = fullName;
    this.favoriteColor = favcolor; 
    this.greet = function(){
        console.log("hello my name is" + this.name + "and my favorite color is " + this.favoriteColor +".");
    }
} */

// Conventional Style (exporting a module)
// module.exports = Person;

// ES6 Sytle (exporting a module)
export default Person;

