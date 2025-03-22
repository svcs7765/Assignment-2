// Task 1: Reverse a String
function reverseString() {
    const input = document.getElementById("inputString").value;
    const reversed = input.split("").reverse().join("");
    document.getElementById("reversedString").textContent = `Reversed String: ${reversed}`;
  }
  
  // Task 2: Check if a Number is a Palindrome
  function checkPalindrome() {
    const input = document.getElementById("inputNumber").value;
    const reversed = input.split("").reverse().join("");
    if (input === reversed) {
      document.getElementById("palindromeResult").textContent = "It's a palindrome!";
    } else {
      document.getElementById("palindromeResult").textContent = "It's not a palindrome.";
    }
  }
  
  // Task 3: Tip Calculator
  function calculateTotal() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    const tipAmount = (subtotal * tipPercentage) / 100;
    const totalAmount = subtotal + tipAmount;
    document.getElementById("totalAmount").textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
  }

  // Add Enter key event listeners
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("inputString").addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
          reverseString();
      }
  });

  document.getElementById("inputNumber").addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
          checkPalindrome();
      }
  });

  document.getElementById("tipPercentage").addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
          calculateTotal();
      }
  });
});
