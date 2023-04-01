let sentence = "The movie is not that bad, I like it";
let replace_str;
let wordNot = sentence.search("not");
let wordBad = sentence.search("bad");
console.log(wordNot);
console.log(wordBad);
if (wordNot < wordBad){
    replace_str = sentence.slice(wordNot, (wordBad+3) );
    sentence = sentence.replace(replace_str, "good")
    console.log(sentence);
}
else{
    console.log(sentence);
}