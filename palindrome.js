// Function to check if a string is palindrome
function isPalindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === reversedStr;
  }
  
  // Example usage
  const testString1 = "A man, a plan, a canal, Panama";
  const testString2 = "hello";
  
  console.log(`${testString1} is a palindrome: ${isPalindrome(testString1)}`); // true
  console.log(`${testString2} is a palindrome: ${isPalindrome(testString2)}`); // false