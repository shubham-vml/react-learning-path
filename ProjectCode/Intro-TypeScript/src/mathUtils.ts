


export function isPallindrome(input: string | number): boolean {
    const str = input.toString();
    return str === str.split("").reverse().join("");
}
