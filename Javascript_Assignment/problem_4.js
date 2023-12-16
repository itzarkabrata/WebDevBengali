function isPalindrome(string) {
    new_str = "";
    for (let i = string.length ; i >= 0 ; i--){
        new_str = new_str + string.charAt(i);
    }
    if (new_str==string) {
        return true;
    } else {
        return false;
    }
}

string_1 = "radar";
string_2 = "abcde";

console.log(isPalindrome(string_1));
console.log(isPalindrome(string_2));