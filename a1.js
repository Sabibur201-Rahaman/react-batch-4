// const a=10;
// let b=20;
// console.log(a)
// console.log(b)
// const c=(a+b)
// console.log (c)

// function sum(num1,num2){   //function statement
//     return num1+num2
// }
// console.log(sum(10,20))


// const sum=function(num1,num2){   //function expression
//     return num1+num2
// }

// console.log(sum(10,5))

// const sum=(num1,num2)=>{
//     return num1+num2    //arrow function
// }
// console.log(sum(10,5))


// const div=num=>num/10

// console.log(div(20))


// const multi=num=>num*5
// console.log(multi(40))



// const firstName ='Sabibur'

// const lastName ='Rahaman'

// const fullName=`my first name is ${firstName.toUpperCase()} and last name is ${lastName.toLocaleUpperCase()}`
// console.log(fullName)


// const age=20;

// const result=age>=18 && 'you are unable to vote'
// console.log(result)

// const tree1=21;
// const number=tree1>20?'pine':'neem'
// console.log(number)


// function double(){
//     const dblArr=[]
//     for(let i=0;i<nums.length;i++){
// dblArr.push(nums[i]*3)
//     }
//     return dblArr
// }
// const nums=[1,2,3,4]
// console.log(double(nums))

// function double(){
// return nums.map((num,index)=>{
//     console.log(index)
//     return num*3
// })
// }
// const nums=[1,2,3,4]
// console.log(double(nums))

// const a='hello'

// console.log(a)

// function findElm(receArr,exactNum){
//    return receArr.find((elm)=>{
//         console.log(elm)
//         if(elm===exactNum){
//             return true

//         }

//     })

    
// }
// const nums=[1,2,3,4,5]
// console.log(findElm(nums,5))

// //filter Array Method
// function filterElm(param,){

// return param.filter((value)=>value%2!=0) 
// }

// const numbers=[1,2,3,4,5,6]
// console.log(filterElm(numbers,4))




// RestOperator
// const person={
//     firstName:'Sabibur',
//     lastName:'Rahaman',
//     age:30,

// }

// const{firstName,...restValue}=person
// console.log(restValue)
// console.log(firstName)


// const newPersonObj={
//     ...person,  //spreadOperator
//     profession:'programmer'
// }
// console.log(newPersonObj)


// const Arr=[1,2,3,4,5]
// const [num1,num2, ...restVal]=Arr
// console.log(num1)
// console.log(num2)
// console.log(restVal)

// const newArr=[...Arr,2,5]
// console.log(newArr)




// function viewPerson({firstName,lastName,age}){
//     console.log(firstName)
//     console.log(lastName)
//     console.log(age)
    
// }

// const person1={
//     firstName:'Adil',
//     lastName:'sakil',
//     age:23,
// }

// viewPerson(person1)


// async function run(){
//     try{
//      const res= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         const data=await res.json()
//         console.log(data)
//     } catch(err){
//         console.log(err)
//         }
        
     
//   }

// run()

//  async function run(){
//    try{
//     const res=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data=await res.json()
//     console.log(data)
// }catch(err){
//     console.log(err)
//    }
// }
// run()
class Person{
    name='sabibur'
    age=25
    constructor(mName,mAge){
        console.log(mName,mAge)
        console.log(mAge)
        // console.log(mAge)
        this.name=mName
        this.age=mAge

    }
    showInfo(){  //method
        return this.name+'-'+this.age
    }
}

const person=new Person('Rahul',50)
console.log(person)
console.log(person.name)
console.log(person.age)
