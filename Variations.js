/** @param {string} name */
export function getNumberOfChars(name) {
    // number of characters in: name
    // đếm có bao nhiêu chữ 
    return name.length;
}

/** @param {string} name */
export function getFirstChar(name) {
    // first character of: name
    // lấy ra chữ cái đầu và in ra chữ hoa 
    return name[0];

}

/** @param {string} name */
export function getLastChar(name) {
    // last character of: name
    // lấy ra chữ cái cuối cùng và in ra chữ thường 
    return name[name.length - 1]
}

/** @param {string} name */
export function getLower(name) {
    // name all in lower case (example: "ABC" becomes "abc")
    // viết chữ thường 
    return name.toLowerCase();
}

/** @param {string} name */
export function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
    // viết chữ hoa 
    return name.toUpperCase();
}
/** @param {string} name */
export function getCapitalized(name) {
    // capitalized version of name (example: "alEX" becomes "Alex")
    // chuyển từ chữ hoa thành chữ thường , chữ thường thành chữ hoa 
    // lấy chữ cái đầu làm chữ hoa 
    return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
}