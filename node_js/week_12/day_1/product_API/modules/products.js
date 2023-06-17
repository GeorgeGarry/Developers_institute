const {db} = require("../config/db_SQL.js");

const get_all_products = () =>{
    return db.raw(`select id,name,price from products`);

    
    // return db(`products`)
    // .select(`id`,`name`,`price`)
    // .orderBy('name');
}

const get_one_product = (id) =>{
    return db(`products`)
    .select(`id`,`name`,`price`)
    .where({id})

}

const post_one_product = (name,price) =>{
    return db(`products`)
    .insert(

            {name,price}
        )
        .returning(`*`)
        
}

const delete_one_product = (id)=>{
    return db(`products`)
    .where({id})
    .del()
    .returning(`*`)
}

const update_one_product = (id,product) =>{
    return db(`products`)
    .update(product)
    .where({id})
    .returning(`*`)
}

const search_products = (search_name) =>{
    return db(`products`)
    .select(`*`)
    .whereILike(`name`, `%${search_name}%`)
    .returning(`*`)

}

const products_ejs = ()=>{
    return db(`products`)
    .select(`id`,`name`,`price`)
}

module.exports={
    get_all_products,
    get_one_product,
    post_one_product,
    delete_one_product,
    update_one_product,
    search_products,
    products_ejs
}