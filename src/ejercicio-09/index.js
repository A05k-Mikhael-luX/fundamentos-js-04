// Escribe tu código aquí:
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    introduce() {
        console.log(`hola, soy ${this.name} y tengo ${this.age} años.`)
    }
    } 
const person = new Person('Alice',28)
person.introduce()
