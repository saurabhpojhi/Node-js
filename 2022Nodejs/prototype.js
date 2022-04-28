//  any function add new attribute .. 
// if we want to add new data or peroperties.

var students =function(){
    this.name="saurabh";
    this.age=27;
    this.email="saurabh@gmail.com"
}

students.prototype= {
    address:"Noida",
    getName:function(){
        return this.name;
    }

}

var stud = new students();   // stud object make 

 console.log(stud.address);

// console.log(stud);
// console.log(stud.name);
// console.log(stud.age);

