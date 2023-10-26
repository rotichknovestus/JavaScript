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

                let x = 10;
                let y = 5;

                let z = (x + y);

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







// Control structures