const express = require(`express`);
const router = express.Router();

const {controller_get_all_products, 
    controller_get_product, 
    controller_insert_product,
    controller_delete_product,
    controller_update_product,
    controller_rearch_products,
    get_all_products_ejs
} = require(`../controllers/products.js`);
// const {controller_get_product, controller_insert_product} = require(`../controllers/products.js`);

router.get(`/api/products`, controller_get_all_products);
router.get(`/api/products/:id`, controller_get_product);
router.post(`/api/products/`,controller_insert_product );
router.put(`/api/products/:id`, controller_update_product); 
router.delete(`/api/products/:id`, controller_delete_product);
router.get(`/api/search/`, controller_rearch_products);
router.get(`/products`, get_all_products_ejs);


module.exports={
    router
}