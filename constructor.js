class Person{                  //parent
constructor(mName,mAge,course){
    console.log(mName,mAge,course)
    this.name=mName
    this.age=mAge
    this.course=course

    

}
showInfo(){
    return this.name+'-'+this.age+'-'+this.course
}
}

const person=new Person('sabibur',30)
const person1=new Person('habil',50)


class Student extends Person{         //child inharit the charactersticks of parent 
    constructor(name,age,course){  // property  belongs child 
        super(name,age) //super is used to call  constructor which is parent  
        this.course=course
    }
}
const student=new Student('Anis',24,'React Student')
console.log(student)
console.log(student.showInfo())