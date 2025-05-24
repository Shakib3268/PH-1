1.What are some differences between interfaces and types in TypeScript?
Interfaces
An interface defines the structure of an object, specifying the names and types of its properties. It's primarily used to describe object shapes and can be implemented by classes.
Types
A type alias can represent any valid TypeScript type, including primitives, unions, intersections, and object shapes. It provides a way to name complex type expressions.

# Interfaces support declaration merging. If you declare the same interface multiple times, TypeScript merges them into a single definition.
interface User {
 name: string;
}
# Type aliases do not support declaration merging. Declaring the same type alias multiple times results in a compilation error.
# Interfaces can extend other interfaces using the extends keyword, allowing for a clear inheritance structure.
interface Person {
 name: string;
}

interface Employee extends Person {
 employeeId: number;
}
# Type aliases can combine multiple types using intersections and union 
type Person = {
 name: string;
};

type Employee = Person & {
  employeeId: number;
};
# Interfaces
Interfaces are commonly used to define contracts within class implementations
# Type
While classes can implement type aliases that describe object shapes, interfaces are generally preferred for this use case due to their clearer intent and better support for declaration merging.

2. What is type inference in TypeScript? Why is it helpful?
Type inference refers to TypeScript's capability to automatically deduce the types of variables, function return values, and other expressions based on the context in which they are used. This means that developers don't always need to explicitly annotate types, as TypeScript can often determine them from the assigned values.
let message = "Hello, TypeScript!";
Type inference also applies to function return types and parameters.
function add(a: number, b: number) {
  return a + b;
}
# why is it helpful?
By inferring types, TypeScript minimizes the need for repetitive type annotations, leading to cleaner and more concise code.
Less clutter from explicit type annotations makes the code easier to read and understand, especially for simple declarations.
ven without explicit annotations, TypeScript's type inference ensures that variables and functions are used consistently with their inferred types, catching type-related errors at compile time.
With types inferred from values, changes to variable initializations automatically update the inferred types, reducing the risk of type mismatches during refactoring.




