class Person{

  constructor(name,age = -99990){
    this.name = name;
    this.age  = age;
  }

  GetGreeting(){
    return "Hi my name is : "+ this.name + ": " + this.age;
  }

  GetInfo(){
      return "Hi my name is : "+ this.name + ": " + this.age;
  }

}

class Student extends Person {

    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }

    HasMajor(){
        return !!this.major;
    }

    GetStudentInfo(){
     return "Student name : "+ this.name + "Age : " + this.age + " Major :" + this.major;

    }


}



class Traveler extends Person{

    constructor(name,age,major,homelocation){
        super(name,age,major);
        this.homelocation = homelocation;

    }

    GetGreeting(){
        if(!!this.homelocation)
            return super.GetGreeting() + " Location : " +this.homelocation; 
         
            return super.GetGreeting();

        }

}

const me = new Traveler("julian",21,"nice","paris");
console.log(me.GetGreeting());
const other = new Traveler ("julian",21,"nice");
console.log(other.GetGreeting());
