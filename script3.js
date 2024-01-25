// let obj = {
//     fName:"Aman"
// }

// let obj2 = {
//     lName:"Singh"
// }

// obj2.__proto__= obj;
// console.log(obj2);
// console.log(obj2.fName);
// console.log(obj2.log);

// function Person(name,age){
// let person = Object.create(Person.prototype)
// person.name=name;
// person.age = age;
// return person
// }
// Person.prototype.greet = function() {
//         console.log(`Hello $(this.name)`)
//     }

// let user = Person("John",8)
// user.greet()
// console.log(user)

// function Person(name,age){
// this.name = name;
// this.age = age;
//     }
//     Person.prototype.greet = function() {
//             console.log(`Hello $(this.name)`)
//         }
    
//     let user = new Person("John",8)
//     user.greet()
//     console.log(user)

    // class Person{
    //     constructor(name,age){
    //         this.name=name;
    //         this.age=age;
    //     }
    //     greet = function() {
    //         console.log(`Hello $(this.name)`)
    //     }
    // }
    // let user = new Person("John",8);
    // user.greet();
    // console.log(user);

    class User {
        constructor(name){
            this.name = name;
        }
        sayHi(){
            console.log("Hello "+this.name)
        }
    }
    let user = new User("Suman")
    user.sayHi()

    let user1 = new User ("Harsh")
    user1.sayHi()
    console.log(typeof User)