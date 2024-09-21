let table10 = [1,2,3,4,5,6,7,8,9]
let table20 = [10,11,12,13,14,15]

let odd = table10.filter((nb1) => nb1 % 2 !== 0)
let Even = table20.filter((nb2) => nb2 % 2 === 0) 

console.log(odd);
console.log(Even);

let person1 = {
    name : "ahmed",
    lastName : 'chriti',
    walk(){
        console.log('hey there');
    },
    cordonne(){
        console.log(this.name);
    }
}

let person2 = {...person1} // Pour faire une copie d'objet 
person2.lastName = 'Bouhoula'
person2.name = 'aymen'
console.log(person1);
console.log(person2);
// copie d'objet 

let aymen = {
    age : 31 , 
    2 : 'afh',
    city : 'kairouan',
    4 : "married"
}

let ahmed = {...aymen}
ahmed.age = 37 
ahmed.city = 'sousse'


console.log(ahmed);


// Copy ------------------------------------------------
let table2 = []
let table1 = [1,2,3,4,5,6,7,8,9]
table1.forEach((x) => {
    if (x % 2 ===0 ){
        table2.push(x)
    }
})
console.log(table1);
console.log(table2);
let rslt = table1.reduce((a,b) => (a+b))
console.log(rslt);

// Coy and somme 
let allTable = [...table1,...table2]
let rslt2 = allTable.reduce((a,b) => a+b)
console.log(rslt2);


// Calcul de FACTORIEL
let factoriel6 = [1,2,3,4,5,6]
let fact = factoriel6.reduce((a,b) => a*b)
console.log(fact);
//--------------------------------------------------------


// Copy d'object------------------------------------------
let person = {
    name : 'Aymen',
    name : 'ahmed',
    lastName : 'Bouhoula',
    age : 31,
    adress : {
        city : 'kairouan',
        zipCode : 3100
    }
}

let {name,lastName,age ,adress}= person
console.log(name);
console.log(adress);
// let lastName= person.lastName
// console.log(lastName);

let student1 = {name:"John"}
let student2 = {name:"Mary"}
let newObject = {
 student1, student2
}
console.log(newObject);


let student0 = {name:"John"}
let student = {name:"Mary"}
let newObject2 = {
 ...student1,
 ...student2,
}
console.log(newObject2);











































