// calculating the width of the rectangle
my_array = [ prompt("write word 1"), prompt("write word 2"), prompt("write word 3"), prompt("write word 4")];
function borders_width(words_array=[]){
    longest_word = words_array[0].length
    for (i of words_array){
        if (longest_word < i.length ){
            longest_word = i.length;
        }
    }
    return longest_word+4
}

function star_frame(words_array){
    width = borders_width(words_array);
    for (let i = 0; i < width; i++ ){
        stars_border = stars_border.concat("*")
    }
    console.log(stars_border);
    for (i of words_array){
        my_line = `* ${i}`
        while (my_line.length < width-1){
            my_line = my_line.concat(" ");
        }
        my_line = my_line.concat("*")
        console.log(my_line);
    }
    console.log(stars_border);
    
}
star_frame(my_array);