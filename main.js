/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);

/*** Functions ***/
function delta(a, b) {
    return a - b;
}
function slope(x1, y1, x2, y2) {
    let deltaY = delta(y1, y2);
    let deltaX = delta(x1, x2);
    return deltaY / deltaX;
}

function average(n1, n2) {
    return (n1 + n2) / 2;
}

// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value)


}

function length(x1, y1, x2, y2) {
    let ( deltaX, deltaY ) = delta(x1, y1, x2, y2);
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
}
// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

}
function y_quad(a, b, c, x) {
    return a * x * x + b * x + c;
}
// Determine the zeros of a quadratic using user-inputs for a, b, and c
function Zeros(a, b, c) {}
    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return (root1, root2);
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        return (root);
    } else {
        return {};
    }

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {
let a= parsefloat(prompt("Enter the value of a:"));
let b = parseFloat(prompt("Enter the value of b:"));
    let c = parseFloat(prompt("Enter the value of c:"));

    let h = -b / (2 * a);
    let k = (4 * a * c - b * b) / (4 * a);

    return { h, k };
}
let result = vertex();
console.log(`Vertex: (${result.h}, ${result.k})`);

