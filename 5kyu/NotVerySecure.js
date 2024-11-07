// DESCRIPTION:

// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore


// My solution

function alphanumeric(string){
    if (!/[A-Za-z0-9]/g.test(string)) return false;
    return string.length === string.match(/[A-Za-z0-9]/g).length;
  }