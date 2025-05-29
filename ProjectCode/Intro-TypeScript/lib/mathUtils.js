"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPallindrome = isPallindrome;
function isPallindrome(input) {
    const str = input.toString();
    return str === str.split("").reverse().join("");
}
