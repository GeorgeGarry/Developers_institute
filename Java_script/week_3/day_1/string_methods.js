// typeof
let a = "banana"
console.log(typeof a);

let txt = "asdfgasdfafa";
let len = txt.length
console.log(len)

console.log( txt.indexOf("sd"))
console.log( txt.lastindexOf)

// all 3 the same:
// .slice
// .substring
// .substr

let str = "Please visit Microsoft!";
let str_1 = str.replace("Microsoft", "Developers Institute");
console.log(str.toUpperCase());
console.log(str.toLowerCase());
let txt_1 = "hello";
let txt_2 = "world";
let txt_3 = txt_1 + txt_2;
let txt_4 = txt_1.concat(txt_1, txt_2);

let my_str = "  He llo  ";
// delete spaces on the left
let my_str_2 = my_str.ltrim();
// delete spaces on the right
let my_str_2 = my_str.rtrim();
// delete spaces on the left and right (not inside the string)
let my_str_2 = my_str.trim();