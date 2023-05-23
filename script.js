// establishes HTML references
function generate() { 
  var length = document.getElementById('length').value;
  var caps = document.getElementById('caps').checked;
  var nocaps = document.getElementById('nocaps').checked;
  var numbers = document.getElementById('numbers').checked;
  var symbols = document.getElementById('symbols').checked;
  
  // displays new password in display area
  var password = generatePassword(parseInt(length), caps, nocaps, numbers, symbols);
  document.getElementById('displayArea').innerHTML = password;
  
  // creates random password
function generatePassword(length, caps, nocaps, numbers, symbols) {
  let characters = '';
  let maxLength = 128;
  let minLength = 8;

  if (caps) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (nocaps) {
    characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers) {
    characters += "0987654321";
  }
  if (symbols) {
    characters += "!@#$%^&*()";
  }

  if (length > maxLength) {
    return "Error: password cannot exceed 128 characters"
  }

  if (length < minLength) {
    return "Error: password must exceed 8 characters"
  }

// randomizes characters in password
  let passwordArray = [];
  while (passwordArray.length < length) {
    var character = characters[Math.floor(Math.random() * characters.length)];
    passwordArray.push(character);
    }
  return passwordArray.join('');
}
}