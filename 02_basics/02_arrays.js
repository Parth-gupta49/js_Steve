const marvel_heros = ["thor", "Ironman", "spiderman","Hulk","Doc Strange","Hawkaye"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // this will push the whole array at the end instead of picking one ele and putting it at the end, it will simply put the complete array and now to access it we have to do like the following : 
// console.log(marvel_heros[3][1])

const animated_heros = ["Chota Bheem","Doraemon","Shinchan","Hattori"]

// const all_heros = marvel_heros.concat(dc_heros,animated_heros)
// console.log(all_heros);

const all_heros = [...marvel_heros,...dc_heros,...animated_heros]
// console.log(all_heros);

// #flat Method
// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified dept
// syntax : 
// flat() # default is 1
// flat(depth) #until what depth i need to break the subarrays - eg.,2,3 or infinity is also there
// Return value
// A new array with the sub-array elements concatenated into it
const anotherArray = [1,2,[3,4],[5,[6,[7,8]]]]
const letJustFlatTheAboveArray  = anotherArray.flat();
// console.log(letJustFlatTheAboveArray);

const mArr = new Array([2,3,3,4]);
// #isArray
console.log(mArr)
console.log(Array.isArray(mArr));

// of,from
