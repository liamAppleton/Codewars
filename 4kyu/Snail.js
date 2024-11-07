// DESCRIPTION:

// Snail Sort

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].


// My solution:

function snail(array) {
    let result = [];
    let n = Math.pow(array[0].length, 2);

    while (result.flat().length < n) {
        result.push(array[0]);
        array.shift()

        if (array.length === 1) result.push(array[0]);
        else for (let i = 0; i < array.length; i++) {
                result.push(array[i][array[i].length - 1]);
                array[i].splice(-1);
            }

        if (array.length <= 1) result.push(array);
        else {
            array[array.length - 1].reverse()
            result.push(array[array.length - 1])
            array.pop()
        }

        for (let i = array.length - 1; i >= 0; i--) {
            result.push(array[i][0])
            array[i].splice(0, 1);
        }
    }
    return result.flat().filter(item => typeof item === 'number'); 
}

