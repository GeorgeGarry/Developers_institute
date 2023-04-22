// Exercise Reverse words
    let my_str = "banana how are you sandwich";
    let my_words_arr = my_str.split(" ");
    console.log(my_str);

    function reverse_1_word(str){
        let res_str = "";
        for (let i = str.length - 1; i >=0; i-- ){
            res_str = res_str.concat(str[i])
        }
        return res_str
    }

    function push_reversed_words (arr){
        let my_res_arr = [];
        for (let i = 0; i < my_words_arr.length; i++){
            my_res_arr.push(reverse_1_word(arr[i]))     
        }
        return my_res_arr;
    }
    console.log(push_reversed_words(my_words_arr).join(" "));
// Exercise Reverse words           END


// Exercise Check pangram 
    // let my_pangram = "The five boxing wizards jump quickly";
    // let not_pangram = "asdfgaisdv  eusf";

    // let alphabet = "qwertyuiopasdfghjklzxcvbnm";
    // function check_pangram(str){
    //     let res;
    //     str = str.toLowerCase();
    //     for (let i = 0; i<alphabet.length; i++){
    //         if (str.includes(alphabet.split("")[i])){
    //             res = true;
    //         }
    //         else {
    //             res = false;
    //             return res;
    //         }
    //     }
    // }
    // console.log(check_pangram(my_pangram));


