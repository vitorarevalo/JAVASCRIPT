// length

var arr = ["teste",1,2,3,4,5]

console.log(arr.length)


// push

arr.push(6)
arr.push("Qualquer coisa")
console.log(arr);


// pop
arr.pop();
console.log(arr)


// unshift
arr.unshift(0);
console.log(arr)


// shift
arr.shift()
console.log(arr)


// acessar o último elemento
console.log(arr[arr.length - 1])


// isArray
console.log(Array.isArray(arr))