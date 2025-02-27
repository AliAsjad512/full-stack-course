const person={
    name:"Ali",
    age:"22",
    introduce:function(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age}`);
    }

}

person.introduce();


function outer(){
    
    function inner(){
        
        return `Ali Abbas`;
    }
    return inner();
}

console.log(outer());