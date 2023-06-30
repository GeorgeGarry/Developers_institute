import {useState, useEffect} from  "react";
import { useParams, Link } from "react-router-dom";


const Product =(props)=>{
    const [product, setProduct] = useState('');
    const params = useParams();
    // console.log(params);
    useEffect(() => {
        get_product_info();
    })
    const get_product_info =async () =>{
        try{
            const res = await fetch(`http://localhost:3030/api/products/${params.id}`);
            const data = await res.json();
            // console.log(data);
            setProduct(data);
        }
        catch(err){
            console.log(err);
        }
       
    }
    return (
        <div>
            <h1>Single Product</h1>

            {
                product ? product.map(item =>{
                    return(
                        <div key={item.id} style={{
                            display:"inline-block",
                            padding:"20px",
                            margin:"20px",
                            border:"2px dashed black",
                            borderRadius:"30px",
                            backgroundColor: "antiquewhite"
                                }}>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                </div>
                    )
                }):<h1>Item doesn't exist</h1>
            }
            
        </div>

    )


}

export default Product