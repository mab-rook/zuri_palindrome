// Cascading Palindrome Class
class CascadingPalindrome {
  constructor(input) {
    // Validation of input 
    if (typeof input !== "string" || input.length === 0) {
      throw new Error("Invalid input. Please provide a non-empty string.");
    }
    // Split the input by space and store it in an array called components
    this.components = input.split(" ");
  }

  // Define a method called isPalindrome that takes a parameter called str
  isPalindrome(str) {
    // Convert the str to lowercase and remove any non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Initialize two pointers, one at the start and one at the end of the str
    let start = 0;
    let end = str.length - 1;
    // Loop until the pointers meet or cross each other
    while (start < end) {
      // Compare the characters at the pointers and return false if they are not equal
      if (str[start] !== str[end]) {
        return false;
      }
      // Increment the start pointer and decrement the end pointer
      start++;
      end--;
    }
    return true;
  }

  // Define a method called getPalindromes that returns an array of palindromes from the components array
  getPalindromes() {
    // Initialize an empty array called result
    let result = [];
    // Loop through each component in the components array
    for (let component of this.components) {
      // Check if the component is a palindrome using the isPalindrome method
      if (this.isPalindrome(component)) {
        // If yes, push it to the result array
        result.push(component);
      }
    }
    // Return the result array
    return result;
  }
}

let cp1 = new CascadingPalindrome("1230321 abcd5dcba 09234 0124210");
console.log(cp1.getPalindromes()); 




