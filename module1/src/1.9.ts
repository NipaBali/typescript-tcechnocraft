{

    //


    // Type Alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
    }

    const seudent1: Student = {
        name: 'nipa',
        age: 30,
        gender: 'girl',
        contactNo: '01916'
    }

    const seudent2: Student = {
        name: 'bali',
        age: 500,
        gender: 'girl',
    }


    type Username = string;
    type IsAdmin = boolean;
    const userName : Username = 'Nipa';
    const isAdmin : IsAdmin = true;



    // For Function Alias
    type Add = (num1: number, num2: number) => number;

    // const add = (num1: number, num2: number ) : number => num1 * num2 
    const add : Add = (num1, num2 ) => num1 * num2







    //

}