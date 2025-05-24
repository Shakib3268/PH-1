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
