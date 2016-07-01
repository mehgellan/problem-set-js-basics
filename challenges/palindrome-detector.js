/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom
  - racecar
  - stack cats
  - Pull up if I pull up
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

*/

// YOUR CODE HERE

// var reverseArray = stringArray.reverse();
function isPalindrome(string) {
  var stringArray = string.split('');
  var tempArray = stringArray.slice();
  var reverseArray = tempArray.reverse();
  var reverseString = reverseArray.join('');
  if (reverseString===string) {
      console.log("palindrome");
      return true;
  } else {
      console.log("not a palindrome");
      return false;
  }
}
