// 1rst Daily Challenge
    // Create two functions. Each function should return a promise.
    // The first function called makeAllCaps(), takes an array of words as an argument
    // If all the words in the array are strings, resolve the promise. 
    // The value of the resolved promise is the array of words uppercased.
    // else, reject the promise with a reason.
    
    // The second function called sortWords(), takes an array of words uppercased as an argument
    // If the array length is bigger than 4, resolve the promise. 
    // The value of the resolved promise is the array of words sorted in alphabetical order.
    // else, reject the promise with a reason.

function makeAllCaps(arr){
    return new Promise((resolve, reject) => {
        if (arr.every(i=> typeof i ==="string")){
            resolve(arr.map(i =>{
                return i.toUpperCase();
            }))
        }
        else{
            reject("not all elems are string");
        };
    });
};

function sortWords(arr){
    return new Promise((resolve, reject) => {
        if (arr.length  > 4 && arr.every(i=> typeof i ==="string")){
            resolve(arr.sort())
        }
        else{
            reject(`the array is less then 4 elems or not all words`)
        }
    })

}

makeAllCaps(["apple", "pear", "banana"])
.then(res => {console.log(res);})
.catch(err => {console.log(err);})

sortWords(['APPLE', 'PEAR', 'BANANA', `FALAFEL`, `XYLOPHONE`])
.then(res => {console.log(res);})
.catch(err => {console.log(err);})
// 1rst Daily Challenge                    END

// 2nd Daily Challenge
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`
    //   The first function is named toJs():
    //   this function converts the morse json string provided above to a morse javascript object.
    //   if the morse javascript object is empty, throw an error (use reject)
    //   else return the morse javascript object (use resolve)  
function toJs(str){
    return new Promise((resolve, reject) => {
        if (str ==""){
            reject("the string is empty")
        }
        else {
            resolve (JSON.parse(str))
        }
    })
    
}
    // The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

    // This function asks the user for a word or a sentence.
    // if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
    // else return an array with the morse translation of the user’s word.

async function toMorse() {
    let user_input = document.getElementById("user_input").value.toLowerCase()
    document.getElementById("user_input").value = "";
    if (user_input == ""){ 
        alert ("can't give empty string") 
        return
    }
    let morse_syntax = await toJs(morse);
    let user_input_arr = user_input.split(" ");
    
    const encripted_text = new Promise((resolve, reject) => {
        const result = user_input_arr.map(item =>{
            return item.split("").map(char =>{
                    if (morse_syntax[`${char}`] == undefined){
                        reject(`There is no morse symbol for "${char}" character`)
                    }
                    return morse_syntax[`${char}`]
                })
            });
        
        
        joinWords(result,user_input_arr)
        resolve (result);
        
    })
    
    try{
        console.log(await encripted_text);
    }
    catch(error){
        alert(error)
    }
}

    // The third function called joinWords(morseTranslation), takes one argument: the morse translation array
    // this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

function joinWords(morseTranslation, user_input_arr){
    let root_div = document.getElementById("morse_result");
    morseTranslation.forEach((element,index) => {
        let word_div = document.createElement("div");
        word_div.style.margin = "30px";
        let user_word = document.createElement("p");
        user_word.innerText = user_input_arr[index];
        word_div.appendChild(user_word);
        for (j of element){
            let morse_char = document.createElement("p");
            morse_char.innerText = j;
            word_div.appendChild(morse_char);
        }
        root_div.appendChild(word_div);
        
    });
     
}