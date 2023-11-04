
#  TypeScript First Class


### What It TypeScript:

- TypeScript is a language for application-scale JavaScript
- Typescript is an object oriented Programming Language that build on top of JavaScript with Extra Feature.
- Typescript is superset of JavaScript developed by microsoft.

### Benefits of TypeScript:

#### Support all JS Types.
    -  String
    -  Number
    -  Boolean
    -  Null
    -  Undefined
    -  Object
    -  Symbol

#### Give Some new types :

   -  Interface
   -  void
   -  Array
   -  Tuple
   -  Enum
   -  Union
   -  InterSection

### How Can I Installation TypeScript:

```bash
  npm i -g typescript 
```

### TypeScript Configs or `tsconfig.js` Command:

```bash
  tsc --init
```

### TypeScript File Run in Your Terminal:

```bash
tsc example.ts
```

### How Many Types of Annotation In TypeScript ?

-  There are two types of annotation in TypeScript.
   -  Explicit
   -  Implicit


## What is Implicit Type In TypeScript ?   

-  Implicit Types are types That Typescript infers based on the initial Value of
   the variable.

-  When we declared a variable but not assign type of the variable `typescript`

```ts
// implicitly infers as string
const name = "Nipa bali";

// implicitly infers as number:
const roll = 1;
```

### What is Explicit Type in TypeScript ?

-  Explicitly Types are `types` when we manually provided the type by using
   `typescript syntax.`
-  If you try to store others type data on that variable `typescript ` shows
   `errors`. which helps developers to solve `development errors`

```ts
const exampleName: type = value;
//  or
let age: type;
age = value;
```

```ts
//  one line
const name: string = "Nipa bali";

//  multiple line :
let age: number;
age = 20;
age = 30;
```


# Basic Types In TypeScript :

-  ### `String` : 

```ts
let fullName: string = "Nipa bali";
```


-  ### `Number` : 

```ts
let age: number = 20;

age = 50;
age = 40;
```



-  ### `Boolean` : 

```ts
let isValid: boolean = false;

isValid = true;
```


-  ### `Array` : 

```ts
let friends: string[] = ['rachel', 'minica'];
let eligibleRollList: number[] = [1, 2];
```



-  ### `Tuple` : Tuples in TypeScript are a special type of array that allow you to define a fixed number of elements with specific types in a specific order.

-  #### The rule of Tuple :
   -  fixed length
   -  specific type
   -  specific order

-  Example:

```ts
let agename: [number, string, boolean] = [50, 'Mr Dev', true];
```



# Literal Type In TypeScript :

-  The literal types in TypeScript allow you to create types that express
   specific values. There are three sets of literal types available in
   TypeScript: strings, numbers, and booleans.
-  Literal Type contain fixed value.
-  Example:

```ts
type Easing = "ease-in" | "ease-out" | "ease-in-out";
type OneToFive = 1 | 2 | 3 | 4 | 5;
```


-  # `Object Types` : 

 Typescript has two main ways to define `object types`: using
   `anonymous object types` or using `named interfaces or types`.

### Anonymous Object Type :

 -  `Anonymous object types` are defined `inline` when declaring a `variable`
      or `function` parameter.

```ts
const userName: { name: string; age: number} = {
    name: "value",
    age: 20,
}
```


### Optional Type `(?)`:

-  to make a property in `TypeScript` optional, you can place a question mark
   after the property name.
-  Then optional property type will be specific types | undefined

```ts
    const username : {
        compnay: string; 
        firstname: string;
        middleName?: string; // optional Type
        lastName: string;
    
    } = {
        compnay: 'Programing Hero',
        firstname: 'Nipa',
        lastName: 'Satla'
    }
```

### Readonly Modifier In TypeScript:

-  `Readonly` modifier makes properties `immutable`.
-  After using readonly on a property we can only assign data on an object.
-  we can't update the value after assigning.


```ts
const username : {
    readonly compnay: string; 
    firstname: string;
    middleName: string;
    lastName: string;

} = {
    compnay: 'Programing Hero',
    firstname: 'Nipa',
    middleName: 'bali',
    lastName: 'Satla'
}
//  Errors;

username.name 'Bm Rafiq' // Errors: Cannot assign to 'name' because it is a read-only
```


# Function Type in TypeScript :

### Explicit Function Type write:

-  #### Normal Function :

```ts
function addFunction(num1 : number, num2 : number) : number {
    return num1 + num2;   
}
addFunction(20,56);


addFunction(3, "3"); // Errors : type string is not assignable to type number ;
addFunction(true, 3); // Errors : type boolean is not assignable to type number

```

### Arrow Function :

```ts
const addArrow = (num1 : number , num2 : number) : number => {
    return num1 + num2   
}
```



# Spreed Operator In TypeScript :

-  By using `JavaScript` `spreed operator ` we can spreed or copy any object or
   array

   #### Example Array :

   ```ts
    const bros1: string[] = [
        'first', 'Second', 'Third'
    ];
    const bros2: string[] = [
        'one', 'two', 'three'
    ];
    bros1.push(...bros2);

    // bros1.push(bros2);
   // Errors : Argument of type 'string[]' is not assignable to parameter of type 'string'

   ```

#### Example Object :
```ts
const mentors1 = {
    typesctipt: 'mezba',
    redux: 'Mir',
    dbms: 'Mizan'
}

const mentors2 = {
    prisma: 'Feroz',
    nextjs: 'Tonmoy',
    cloud: 'nahid'
}

const mentorList = {
    ...mentors1,
    ...mentors2,
}
```


# Rest Operator In TypeScript :

```ts
const greetFriends = (...friends : string[]) => {
    console.log(friends.forEach((friend) => (console.log(`Hi My Frinds are ${friend}`))))
}
greetFriends('First', 'Second', 'Third', 'Four')

```


# Object `Destructuring` In JavaScript :-

-  When we try to destructure any variable we can not define type in destructure
   object or array ;


#### Object Destructuring

```ts
const user = {
    id: 456,
    name: {
        first: 'nipa',
        second: 'bali'
    },
    contactno: "01916939556",
    address: 'barisal'
}
const {contactno, name: {first : newFirst } } = user; 
```


#### Array Destructuring

```ts
const myFriends = ['one', 'two', 'third', 'four', 'five', 'six'];
const [ , , bestFriend , ...rest] = myFriends
```

# `Type alias` -> "টাইপের উপনাম" in TypeScript


-  In TypeScript, type aliases can be used to give a type `new name`.
-  They are similar to `interfaces`,
-  But they are more flexible as They can not only `alias` only object type but
   also primitive types aliases and `others types` aliases


```ts
type Username = string;
type IsAdmin = boolean;
const userName : Username = 'Nipa';
const isAdmin : IsAdmin = true;
 ```

```ts
// For Function Alias
type Add = (num1: number, num2: number) => number;

// const add = (num1: number, num2: number ) : number => num1 * num2 
const add : Add = (num1, num2 ) => num1 * num2
```

-  #### Object in Type Alias:

```ts
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
```


# Union Type: Union type allows a value to be more than one type.

-  We can define multiple type by using union type.
-  Union type can used to define a variable that can be different types.
-  Union type define by using `pipe ( | )`.

```ts
type FrontEndDeveloper = 'fakibazDeveloper' | 'JuniorDeveloper';
type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper';
type developer = FrontEndDeveloper | FullStackDeveloper;
const newDeveloper : FrontEndDeveloper = 'JuniorDeveloper';
type User = {
    name: string;
    email?: string;
    gender: 'male' | 'Female';
    blood: '0' | 'B' | 'B+';
}

const user1 : User = {
    name: 'nipa',
    gender: 'male',
    blood: '0'
}
```


# Intersection Type :

-  Intersection types are way to combine multiple types into a single type.
-  Intersection types contain all features of every single types which combined.
-  We can define Intersection type by using `&` operator .

```ts
type developer1 = {
    skills: string[];
    designation1: 'Front End Developer';
}

type developer2 = {
    skills: string[];
    designation2: 'backEnd Developer';
}
type FullDeveloper = developer1 & developer2;
const fulldeveloper : FullDeveloper = {
    skills: ['html', 'css', 'javascript'],
    designation1: 'Front End Developer',
    designation2: 'backEnd Developer',
}

```

# `?` Changed Name With Use Case :


-  ### Ternary Operator : "? "

    -  Ternary operator is a conditional operator.
    -  Ternary Operator get three operands.
    -  Syntax: `condition ? expression : expression`
    -  If the condition is `truthy` Ternary operator execute the first
        `expression`.
    -  Otherwise execute the second `expression`
```ts
const age : number = 20;

if (age >= 18) {
    // console.log('adult')
} else {
    // console.log('Not adult')
}

const isAdult = age >= 18 ? 'adult' : 'Not Adult';
// console.log({ isAdult })
```
-  ### Nullish Coalescing Operator: (??)

-  Nullish Coalescing Operator is a Logical Operator.
-  Nullish Coalescing Operator `return` it's `right hand Operand` if
   its` left hand side operand` is `null` or `undefined`
-  It's worked based on `null` or `undefined`.
-  Syntax : `operand ?? "default value"`

```ts
// null | undefined ---> decision making 
const isAuthentication = ''; 
const result1  = isAuthentication ?? "Guest";
```

-  ### Optional Chaining : (?.)

   -  Optional chaining is a feature introduced in ES2020 that allows for safe
      and concise access to nested object properties. It uses the ?. operator to
      check if a reference to the left is undefined or null, and if so, it short
      circuits and returns undefined. Otherwise, it continues the chain of
      access checks.
   -  Syntax: `obj?.propertyName?.properTyeName?.propertyName`

```ts
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
```


# Nullable Type In TypeScript :

-  `Nullable` type helps us to define a type for variable either `specific type`
-  Union type helps us to define nullable type. or `null`.

```ts
 //nullable Types | unknown types
const searchName = (value: string | null) => {
    if (value) {
        console.log('Searching')
    } else {
        console.log('There is nothing to search')
    }
}
searchName(null)
```


# `unknown` type in typeScript:

-  unknown which is the type-safe counterpart of any
-  Anything else assignable to unknown.

```ts
const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === 'number') {
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`)
    }
    else if (typeof value === 'string') {
        const [result, unit] = value.split(' ');
        const convertedSpeed = (parseFloat(result) * 1000) / 3600;
        console.log(convertedSpeed);
    }else {
        console.log('the value is not right')
    }
}

getSpeedInMeterPerSecond('200');

```

# Never Type In TypeScript :

-  TypeScript introduced a new type never, which indicates the values that will
   never occur.

-  The never type is used when you are sure that something is never going to
   occur.
-  For example, you write a function which will not return to its end point or
   always throws an exception.

-  Type `never` has no value. Otherwise type `void` have value `undefined` or
   `null`.

```ts
const throwError = (msg: string) : never => {
    throw new Error(msg);
}
throwError('only error show but not any type of return')

```



