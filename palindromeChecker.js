function isPalindrome(inputStr1) {
    if (inputStr1 !== null) {
        return inputStr1 === inputStr1.split('').reverse().join('');
    }
    return false;
}

module.exports = isPalindrome;