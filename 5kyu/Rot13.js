// DESCRIPTION:

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".



// My solution

function rot13(message){
    let regex = /[A-Za-z]/g;
    let charIndexes = [];
  
    for (let i = 0; i < message.length; i++) {
      if (message[i].match(regex) !== null) charIndexes.push([message[i], i]);
    }
  
    for (let i = 0; i < charIndexes.length; i++) {
      let code = charIndexes[i][0].charCodeAt(0);
      if ((code > 77 && code < 91) || code > 109) {
        charIndexes[i][0] = String.fromCharCode(charIndexes[i][0].charCodeAt(0) - 13);
      } else {
        charIndexes[i][0] = String.fromCharCode(charIndexes[i][0].charCodeAt(0) + 13);
      }
    }
  
    message = message.split('');
    for (let i = 0; i < charIndexes.length; i++) {
      for (let j = 0; j < message.length; j++) {
        if (j === charIndexes[i][1]) message[j] = message[j].replace(message[j], charIndexes[i][0])
      }
    }
    
    return message.join('');
  }