{
    //

    // ternary operator || optional chaining || nullish coalescing

    const age : number = 20;

    if (age >= 18) {
        // console.log('adult')
    } else {
        // console.log('Not adult')
    }

    const isAdult = age >= 18 ? 'adult' : 'Not Adult';
    // console.log({ isAdult })


    // nullish coalescing Operator
    // null | undefined ---> decision making 
    const isAuthentication = ''; 
    const result1  = isAuthentication ?? "Guest";

    const result2 = isAuthentication ? isAuthentication : 'Guest'
    // console.log({ result1 }, {result2});


    // optional chaining
    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string
        }
    }


    const user : User = {
        name: 'nipa',
        address: {
            city: 'Dhaka',
            road: '05',
            presentAddress: 'Dhaka',
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'No Permanent Address';
    console.log(permanentAddress)

    //
}