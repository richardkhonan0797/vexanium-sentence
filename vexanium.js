// These 2 arrays will make a sentence, what would it be?
let arr1 = ['A', 'B', 'D', 'E', 'G', 'H', 'I', 'R', 'Q', 'O', 'N', 'K', 'S', 'T', 'U', 'V', 'Y']
let arr2 = [32, 26, 37, 28, 27, 34, 31, 30, 41, 37, 25, 37, 33, 24, 27, 35, 34, 30, 36, 41, 24, 31, 26, 41, 33, 37, 40, 38, 41, 34, 30, 41, 40, 30, 24, 41, 39, 31, 31, 29, 28]

// Instructions:
// 1. Create a github public repo for this test, then provide us the link for it.
// 2. Create your own algorithm to answer the question (up to you, in any programming language you prefer)
// 3. Write an explanation of your algorithm in README.md

// console.log(arr2.sort().map( num => num-24))

arr1.reverse()

let newArr = arr2.map( num => {
    if(arr1[num-24]) return arr1[num-24]
    return ' '
})


console.log(newArr.join(''))