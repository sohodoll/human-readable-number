module.exports = function toReadable(number) {

  var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  let result = ""
  
  function convert_tens(num) {
  if (num < 10) return ones[num].trim();
  else if (num >= 10 && num < 20) return teens[num - 10].trim();
  else {
    result = tens[Math.floor(num / 10)].trim() + " " + ones[num % 10].trim();
    return result.trim();
  }
}
  
  if (number == 0) return "zero";
  else if (number < 10) return ones[number];
  else if (number >= 10 && number < 20) return teens[number - 10].trim();
  else if (number >= 20 && number < 100 ) {
    result = tens[Math.floor(number / 10)] + " " + ones[number % 10];
    return result.trim();
  } else if (number > 99) {
       result = ones[Math.floor(number / 100)] + " hundred " + convert_tens(number % 100);
       return result.trim();
  }
}

