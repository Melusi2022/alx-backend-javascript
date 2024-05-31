A class describes the contents of objects belonging to it: it describes a set of data fields (called instance variables) and it defines the operations on those fields (called methods). In order words, it is also defined as the collection or a group of object that contains object data types along with some methods in it. You can create a JavaScript class by using a predefined keyword named class before the class name. We will show you some examples below to illustrate how it works.

Let us have a look over the following syntax section which illustrates how to declare a class in JavaScript:

Syntax:

class class_name {
    // body of the class
    // Here methods and object data types could be defined...
}
Creating an object of a class can be accomplished by using the new keyword and calling the constructor of that class (at the time of object instantiation). A constructor is declared by using the predefined keyword constructor. Constructors can be of any type, such as default constructors and parameterized constructors. As we can see here, we use a constructor to initialize and declare a variable. However, there can only be one constructor per class, and it can be parameterized or defaulted and further note point would be that the constructor doesn’t have any return type.  

Syntax:

class name {
   constructor(a, b, c) {
     // Initialize the class variable
   }
}
Example 1:


class Geeks { 
  
    // Constructor 
    constructor(num1, num2) { 
        console.log("Inside Constructor"); 
  
        // Initialize class variable 
        this.num2 = num2; 
        this.num1 = num1; 
    } 
} 
  
// Initialize the class object 
let obj = new Geeks(1, 2); 
console.log(obj.num1); 
console.log(obj.num2);
Output:

Inside Constructor
1
2
