
// array
// shallow copy - shallow copy of an obj share the same reference point
// deep copy - don't share the same reference
// const myArr = [0,23,43,2,4,true,"Parth"] // can contain values of diff datatypes as well

// const myArr1 = myArr
// console.log(myArr[0]);
// myArr1[0] = "Pg"
// console.log(myArr[0]); // as this was a shallow copy the reference remain the same and the same object is being changed 

// console.log(typeof myArr);
// console.log(myArr);

// methods of arrays

const newArray = [1,2,3,4]
// #push and #pop used to add and remove the elements of an array at the end
// newArray.push(5)
// newArray.push(6)
// newArray.pop()
// console.log(newArray);

// #unshift and #shift method
// unshift and shift are used to add and remove the element from the start of the array
// unshift add the ele at the start
// shift remove the ele from the start
// newArray.unshift(89)
// newArray.shift()
// console.log('Array after shift method :',newArray);

// #includes method
// console.log('includes method of the array always returns a boolean value like this one',newArray.includes(5));
// console.log('includes method of the array always returns a boolean value like this one',newArray.includes(3));

// #indexOf method
// console.log("indexOf method returns the index of the argument, if its not then returns -1 ",newArray.indexOf(3));
// console.log("indexOf method returns the index of the argument, if its not then returns -1 ",newArray.indexOf(31));


// #join method
// Syntax : 
// join()
// join(separator)
// gives the array as strings
// also can give the customised seperator to seperate the array with a customized seperator
// console.log(newArray.join("-"));

// #slice and #splice

const anotherArray = [0,1,2,3,4,5,6,7,8,9]

// #slice method
// console.log("Original Array :\n\n",anotherArray);
// console.log("Slice does this .slice(1,5): ",anotherArray.slice(1,5));
// console.log("After slice :\n\n",anotherArray);
// slice practice:
// const letSeeSlice = anotherArray.slice(1,5);
// console.log(letSeeSlice);
// letSeeSlice[1] = 59
// console.log(letSeeSlice);
// console.log("After slice :\n",anotherArray.join());

// #splice method
const yeNayaArrayHai = anotherArray.splice(1,5);
// # Syntax
// splice(start)
// splice(start, deleteCount) => deleteCount basically means how many ele we wanna remove
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)
// # Return value
// An array containing the deleted elements.
// If only one element is removed, an array of one element is returned.
// If no elements are removed, an empty array is returned.


// console.log("splice method does this : ",yeNayaArrayHai);
// console.log("After Array :\n\n",anotherArray);
// splice practice: 

const letSeeSplice = ["Monday","Tuesday","Thrusday","Friday","Saturday","Sunday"]

// console.log(letSeeSplice.splice(3));
// console.log(letSeeSplice.splice(2,0,"Wednesday"));
console.log(letSeeSplice.splice(2,1,"Wednesday","Thrusday"))
console.log(letSeeSplice.join());

