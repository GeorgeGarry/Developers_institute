function grammar(my_beers){
    if (my_beers == 0){
        console.log(`Take ${my_beers+1} down, pass it around`);
    }
    else{
        console.log(`Take ${my_beers+1} down, pass them around`);
    }
}
function sing_the_song(){
    let verse = ["bottles of beer", "on the wall"];
    let beers_passed = 0;
    for (let i = 99; i > 0; i-=beers_passed){
        console.log(`${i} ${verse[0]} ${verse[1]}`);
        console.log(`${i} ${verse[0]}`);
        if (beers_passed <= i){
            grammar(beers_passed);
            console.log(`${i-(beers_passed+1)} ${verse[0]} ${verse[1]}`);
            beers_passed ++;
            console.log("\n");
        }
        else{
            console.log(`Take ${i} down, pass them around`);
            console.log(`No more ${verse[0]} ${verse[1]}`);
        } 
    }
}
sing_the_song();