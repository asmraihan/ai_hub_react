const nums = [12, 45, 7, 65, 1, 349]

// nums.sort(lowToHigh)
// function lowToHigh(a,b){
//     return a - b
// }

nums.sort((a,b)=> a - b)

console.log('new arr',nums)