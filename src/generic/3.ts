/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

// Не вийшло переробити через Object.assign, нагуглив таке...

function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

export {}