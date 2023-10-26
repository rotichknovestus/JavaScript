// Variables - These are named memory location for data
    	// Tpo create a variable in javascript we use the keyword let... Example:


        let message; // this statement creats a variable with the name message
        message = "Hello world"; //the message variable stores the string 'hello worlld'
        alert(message);

        let fName = 'Joe',msg = 'Hello'

        //Rules for declaring variables;
            //1. Always start with the key word
            //2. Never declare two variables using the same name
            // The name must contain only letters, digits or the symbols $ and _
            //3. Always start with alphabet characters
            //4. Don't use numbers to name ur variables
            //5. After declaring a variables don't 4get to terminate(;)
            //6. After initializing a variable don't 4get to terminate(;)
            //7. When the name contains multiple words always use camelCase ie firstName
            //8. Case matters name and Name are two diffrent variables. Always ensure to check on your casing
            //9. Avoid using reserver or key word eg let
            //10. If you want to have a variable that does not change, declare the variable using the keyword const ie cont pi = 3.142


            //Summery
            //We can declare variables to store data by using the var, let or const keywords.
            //let - is a modern variable declaration
            //var - is an old-school variable declaration. Normally we don't use it at all
            //const - is like let but now the value of the variable can't be changed anymore
            //Variables should be named in a way that allows us to easlly understand what's inside them.


            //Task
            //declare two variables: admin and name.
            //Assign values to the declared variables
            //reassign the value to both variables
            //Show the values of the two variables using alert(must outlut the assigned values)


            let admin = 'Josee';

            let name = 'Novestus';

            alert(admin);
            alert(name);

            //Question 1:
                // Declare a variable age and assign your age to it. Then, display the value of age using console.log().

                let age = '20';
                console.log(age)

            //Question 2:
                //Create two variables, x and y, and assign them values of 10 and 5, respectively. Calculate and display the sum of x and y using console.log().

<<<<<<< HEAD
                let x1 = 10;
                let y = 5;

                let z = (x1 + y);
=======
                let x = 10;
                let y = 5;

                let z = (x + y);
>>>>>>> 063794f2fba7692d12ff3db6d4936ba76221be3e

                console.log(z);

            //Question 3:
                //Declare a variable name and assign your name to it. Then, change the value of name to "Alice" and display it using console.log().

                var fName2 = "Joan";

                fName2 = "Alice";

                console.log(fName2)


<<<<<<< HEAD

=======
>>>>>>> 063794f2fba7692d12ff3db6d4936ba76221be3e
            //Question 4:
                //Create a variable isStudent and assign a boolean value to it to indicate if you are a student (true or false). Display the value of isStudent using console.log().
                
                let isStudent = "";


            //Question 5:
                //Declare a constant variable PI and assign the value 3.14159 to it. Attempt to reassign a new value to PI. What happens? Explain why this occurs.

                const PI = 3.14159;

                console.log(PI)

                // let PI = 3.14159;

                // console.log(PI);

                //Variables that are declared using const can not be re-declaered any where again



// Data types 
        //Any value stored by a variables
        //eg let age = 35

        /*
        35 in variable age is a number data type

        There are 8 basic datatypes in JavaScript
        1. Primitive data types
            -Number
                For numbers of any kind:integer or floating and floating-point numbers
                    eg: let age = 30;
            -String
                Represents a sequence of characters, enclosed in single or double quotes
                    eg: let name = 'Novestus';
            -Boolean
                Represents a true or false value.
                    eg: let isStudent = true;
            -Undefined
                Represents a variable that has been declare but has no assigned value.
                    eg: let city;
            -Null
                Represents the absence of a value or an empty value.
                    eg: let emptyValue = null;
            -Symbol
                Represents a unique and imutable value, Primary used as object property keys.
            -bigint
                For integer numbers of arbitrary length.
        2. Non-Primitive data types
            -Object
                Represent a collection of keys-value pairs, where values can be of any data type.
                Objects can also include functions.
                    eg: let person = { name: 'Novestus', age: 20};
            Array
                A special type of object used to store ordered listd of values
                    eg: let colors = ["red", "green", "blue"];

            Key difference between Primitive and Non-Primitive data types

            1. Mutability:
                Primitive data types are immutable, meaning their values cannot be changed after creation.
                Non-primitive data types are mutable and their values can be modified.

            2. Storage:
                Primitive data types are stored directly in memory and accessed by value.
                Non-primitive data types are stored as references in memory and accessed indirectly.

            3. Passind:
                When primitive data types are passed to functions or assigned to variables, they are copied by
                value. Non-primitive data types are passed by reference, meaing the reference to the object in
                memory is passed.

            4. Type Comparison: 
                When comparing primitive data types, you are comparing their values. For Non-primitive data types
                you are comparing references tp objects in memory.

            5. Equality:
                When comparing Non-primitive data types for equality, you need to check whether they refer to the
                same object (by comparing references). Primitive data types are compared by values.
        */

                let cows = 50;
                let goats = 80;

                let totals = cows + goats;
                 console.log(totals)


<<<<<<< HEAD
    //!Task Of Monday 21st oct 2023.

//*What are the final values of all variables a, b, c and d after the code below?

let a1 = 1; let b = 1;  let c = 2;

c = ++a1;
let d = b++; 

console.log(a1);
console.log(b);
console.log(c);



//*What are the values of a and x after the code below?

let a2 = 2;

let x = 1 + (a2 *= 2);

console.log(x);


//*What are results of these expressions?

let f = " " + 1 + 0;

console.log(f);

 let skill = "" - 1 + 0;

console.log(skill);

let bool = 'true' + 'false';

console.log(bool);

let bool2 = 6 / "3";
console.log(bool2);

let bool1 = "2" * "3";
console.log(bool1);

let boolf = 4 + 5 + "px";
console.log(boolf);

let boole = "$" + 4 + 5;
console.log(boole);

let boold = "4" - 2;
console.log(boold);

let boolc = "4px" - 2;
console.log(boolc);

let boolb = "  -9  " + 5;
console.log(boolb);

let boola = "  -9  " - 5;
console.log(boola);

let bool3 = null + 1;
console.log(bool3);

let bool4 = undefined + 1;
console.log(bool4);

let bool5 = " \t \n" - 2;
console.log(bool5);



//*Here’s a code that asks the user for two numbers and shows their sum. It works incorrectly. The output in the example below is 12 (for default prompt values). Why? Fix it. The result should be 3.

let a = prompt("Enter first number?", 1);
let b2 = prompt("Enter second number?", 2);

alert(a + b2); // 12	



//!  Control structure

/*Control structures in JavaScript are used to control the flow of your program. 
They allow you to make decisions, create loops, and execute code based on conditions. 
There are mainly two types of control structures: conditional statements (if, else, switch) 
and loops (for, while, do...while). */

//!Conditional statements

/*
Conditional statements allow you to make decisions in your code. 
Here are examples of the most common conditional statements:
1: if Statement - The if statement is used to execute a block of code if a specified condition is true.

    Syntax:
        if(condition){
            code to be executed is condition is true
        }

2: if..else statement - The else statement is used with if to specify a block of code to be executed if 
the condition is false

    Syntax:
        if(condition){
            code to be executed is condition is true
        }
        else{
            code to be executed is condition false
        }

3: if..else if statement -The else if statement allows you to specify a new condition if the first condition
 is false

     Syntax:
        if(condition){
            code to be executed1 is condition1 is true
        }
        else if{
            code to be executed2 is condition2 true
        }
        else{
            code to be executed if no condion3 true 
        }

4: Switch statment - The switch statement is used to select one of many code blocks to be executed.

     Syntax:
    switch(expression){
        case value1;
        code to be executed if expression is value1
        break;case value2:
        code to be executed if expression is value2
        break;
        default;
        code to be executed if expretion does not matchany case

 */
//*1.If statments

        let age1 = 18;
        if(age1>=18){
            console.log('You are an Adult');
        }
//*2. if...else statment

        let age2 = 18;
        if(age2>=18){
            console.log('You are an Adult');
        }
        else{
            console.log('You are a Kid');
        }

//*3.If... else if statment

        let time = 14;
        if(time<12){
            console.log('Good Morning');
        }
        else if(time<18){
            console.log('Good Afternoon');
        }
        else{
            console.log('Good evening');
        }

//*4.Switch statment
let day = 'Monday';
switch(day){
    case 'Monday':
            console.log('It\'s the first day of the week');
            break;
        case 'Tuesday':
            console.log('It\'s the second day of the week');
            break;
        case 'Wenesday':
            console.log('It\'s the third day of the week');
            break;
        case 'Thursday':
            console.log('It\'s the fourth day of the week');
            break;
        case 'Friday':
            console.log('It\'s the fifth day of the week');
            break;
        case 'Sataday':
            console.log('It\'s the sixth day of the week');
            break;
        case 'Sunday':
            console.log('It\'s the sevent day of the week');
            break;
        default:
            console.log('Just a day');
}

/*Loops

-> In javascript, Loops are used to  execute a block of code repeatedly.
->There are three main types of loops; 'for..', 'while..', 'do..while'

1:for Loop:
    The for loop is used to execute a block of code a specific number of times. 
    It consists of three parts: initialization, condition, and iteration.
yntax

        for (let i = 0; i < 5; i++) {
             console.log(i);
        }


    > Initialization: let i = 0 initializes a variable i.
    > Condition: i < 5 sets the loop termination condition.
    > Iteration: i++ increments the value of i in each iteration.

    2: while Loop:
        The while loop repeats a block of code as long as a specified condition is true.
    
        Syntax
    
            let i = 0;
                while (i < 5) {
                 console.log(i);
                 i++;
            }
    
        > The loop continues as long as i is less than 5.
    3:  do...while Loop:
        The do...while loop is similar to the while loop but guarantees that the code block will 
        be executed at least once before checking the condition.
    
        Syntax
    
            let i = 0;
                do {
                    console.log(i);
                    i++;
                } while (i < 5);
    
        > The code block runs first, then checks the condition.

* 
 */

//! for Loop:
for (let i = 0; i < 5; i++) {
    console.log(i);
}


//! while Loop:

let xi = 6;
while (xi < 11) {
    console.log(xi);
    xi++;
}

//! do...while Loop:

let iy = 15;
do {
    console.log(iy);
    iy++;
}
while (iy < 20);









//*Assignment as at 26/10/2023. Thursday.

//What is the last value alerted by this code? Why?

let ix = 3;
while (ix) {
    alert( ix-- );
}

/*Which values does the while loop show?
For every loop iteration, write down which value it outputs
and then compare it with the solution.Both loops alert the same values, or not?*/

//!The prefix form ++i:

let il = 0;
while (++il < 5)
alert( il )

//! The postfix form i++

        let i = 0;
        while (i++ < 5) alert( i );

/*Which values get shown by the "for" loop?
For each loop write down which values it is going to show. 
Then compare with the answer. Both loops alert same values or not?*/

// A: The postfix form:

    for (let i = 0; i < 5; i++) alert( i );

// B: The prefix form:

    for (let i = 0; i < 5; ++i) alert( i );

// 4: Use the for loop to output even numbers from 2 to 10


// 5: Rewrite the code changing the for loop to while without altering
// its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
alert( `number ${i}!` );
}

// 6: An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

/*n other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
Write the code which outputs prime numbers in the interval from 2 to n.
For n = 10 the result will be 2,3,5,7.
P.S. The code should work for any n, not be hard-tuned for any fixed value.*/


=======





// Control structures
>>>>>>> 063794f2fba7692d12ff3db6d4936ba76221be3e
