function trailingZeros(n) {
  let count = 0;
  for (let i = 5; n / i >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
if (!isNaN(input) && input >= 0) {
  alert(`Number of trailing zeros in ${input}! is: ${trailingZeros(input)}`);
} else {
  alert("Please enter a valid non-negative integer.");
}
