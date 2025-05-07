function calculateTax(amount) {
  return amount * .10;
}

function convertToUpperCase(text) {
  return text.toUpperCase();
}

function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  };
}

function isPalindrome(word) {
  const lowerWord = word.toLowerCase();
  const reversed = lowerWord.split('').reverse().join('');
  return lowerWord === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discount = originalPrice * (discountPercentage / 100);
  return originalPrice - discount;
}


// This is required for the test to function properly
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };