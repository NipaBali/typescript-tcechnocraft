{

// Learning Function
// Normal Function
// Arrow Function


function addFunction(num1 : number, num2 : number) : number {
    return num1 + num2;   
}
addFunction(20,56);

const addArrow = (num1 : number , num2 : number) : number => {
    return num1 + num2   
}

// Object --> function --> method

const poorUser = {
    name: 'Nipa',
    balance: 0,
    addBalance( balance : number ) : string {
        return `My new balance is : ${this.balance + balance}`
    }
}


// Array

const arr : number[] = [1,2,4,5];
const arrNew : number[] = arr.map((ele : number) : number => ele*ele) ;


}










