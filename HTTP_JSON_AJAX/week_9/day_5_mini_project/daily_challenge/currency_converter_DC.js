async function setup_oprions(){
    let req = await fetch (`https://v6.exchangerate-api.com/v6/18714bbfbf65cf36e8303d16/latest/USD`);
    let data = await req.json()
    for (i of Object.keys(data.conversion_rates)){
        let option = document.createElement("option");
        option.value = i;
        option.innerText = i;
        let option_2 = document.createElement("option");
        option_2.value = i;
        option_2.innerText = i;
        document.getElementById("currency_choice").appendChild(option);
        document.getElementById("currency_outcome_choice").appendChild(option_2);
    };
};
setup_oprions();

async function convert_cur(){
    let my_cur = document.getElementById("currency_choice").value
    let need_cur = document.getElementById("currency_outcome_choice").value
    let req = await fetch (`https://v6.exchangerate-api.com/v6/18714bbfbf65cf36e8303d16/pair/${my_cur}/${need_cur}`);
    let data = await req.json();
    let money_give = document.getElementById("money_give").value;
    document.getElementById("money_recieve").innerText = `Your total ammount is: ${money_give*data.conversion_rate} ${need_cur}`
};

async function reverse_convert(){
    let my_cur = document.getElementById("currency_choice").value
    let need_cur = document.getElementById("currency_outcome_choice").value
    document.getElementById("currency_choice").value = need_cur;
    document.getElementById("currency_outcome_choice").value = my_cur;
    convert_cur();

};