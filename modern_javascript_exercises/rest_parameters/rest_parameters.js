// Instructions can be found in rest_parameters.md

// function add(a, b) {
//   // Add a loop here
//   return a + b;
// }

export function add(...nums) {
    let output = 0;
    nums.forEach(num => {
        output += num;
    })
    return output;
}

add(1, 2, 3, 4, 5);
