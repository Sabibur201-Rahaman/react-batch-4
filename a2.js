class Person{
    constructor(name,age,profession){
        console.log(name,age,profession)
this.name=name
this.age=age
this.profession=profession
    }
    showInfo(){
        return this.name+'-'+this.age+'-'+this.profession
    }
}

const person=new Person('sabir',30)

console.log(person.name)
console.log(person.age)

class Student extends Person{
constructor(name,age,profession){
    super(name,age) //parent
    this.profession=profession


}
}

const student=new Student('Anisur',20,'developer')

console.log(student)
console.log(student.showInfo())
