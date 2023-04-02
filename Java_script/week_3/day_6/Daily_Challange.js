let my_str = "";
let index = 0;
while(index < 6){
    my_str = my_str.concat("* ");
    console.log(my_str);
    index++
}
my_str = "";
for (let i = 0; i < 7; i++){
    my_str = "";
    for (let j = 0; j <= i; j++){
        my_str = my_str.concat("* ");
    }
    console.log(my_str);

}