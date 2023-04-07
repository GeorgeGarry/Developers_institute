let my_equation = "";

function clear_last(){
    for ( let i = (my_equation.length)-1; i >= 0; i-- ){
        if (isNaN(my_equation[i]) == true){
            my_equation = my_equation.slice(0, my_equation.indexOf(my_equation[i]));
            return;
        }
    }
    my_equation = "";
}

function reset_calc(){
    my_equation = "";
}

function number(num){
    my_equation += num;
    console.log(my_equation);
}

function operator(oper){
    my_equation += oper;
    console.log(my_equation);
}

function equal(){
    my_equation = eval(my_equation);
    console.log(my_equation);
    
}