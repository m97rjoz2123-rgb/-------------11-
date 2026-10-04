// let a = 5;
// let b = 2;
// let c = 1;
// let d = 3;
// let x = 5;
// let z = 0;
// let v = 1;
// let w = 3;

// function add(a, b) {
//     return a + b;
// }
let container1 = document.getElementById("plus");
// container1.textContent = `${a} + ${b} = ${add(a, b)}`;

// function add(a, b) {``
//     return a - b;
// }
// let container2 = document.getElementById("plus");
// container2.textContent = `${a} - ${b} = ${add(a, b)}`;

// function divide(x, z) {
//     if(z === 0 ){
//         return `деление не возможно`
//     }
//     return x / z;
// }
// let container3 = document.getElementById("dividee");
// container3.textContent = `${x} / ${z} = ${divide(x, z)}`;

// function multiply(v, w) {
//     return v * w;
// }
// let container4 = document.getElementById("multiplyy");
// container4.textContent = `${v} * ${w} = ${multiply(v, w)}`;


// function checkNumber(num) {
//     if (num) {
//         if (num <= -1) {
//             container1.textContent = `отрицательное`;
//         } else if (num === 0) {
//             container1.textContent = `число ровняется нулю`;
//         } else {
//             container1.textContent = `положительное`;
//         }

//     }

//     console.log(num);


// }
// checkNumber()


let num = 1;
function isEven(num) {
    return num % 2 === 0;

}

console.log(isEven(1000));

function checkNumber(a) {
    if (a) {
        if (a < 0) {
            container1.textContent = `отрицательное`
        } else if (a === 0) {
            container1.textContent = `число ровняется нулю`
        } else {
            container1.textContent = `положительное`
        }
    }

}
console.log(num);

