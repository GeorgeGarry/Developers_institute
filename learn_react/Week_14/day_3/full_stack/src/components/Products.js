import {useState, useEffect} from "react";
import { Link } from "react-router-dom";


const Products=(props)=>{
    const [products,setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [input_values, setInputValues] = useState({
        name:'',
        price:''
    })
    const  setInput_values = (e) =>{
        setInputValues({...input_values, [e.target.name]:e.target.value})
    }
    useEffect(()=>{
        all_products();
    },[])//   [] is for componenDidMount() - so it will be done only once
    
// 
    const all_products = async () =>{
        try{
            const res = await fetch(`http://localhost:3030/api/products`)
            const data = await res.json();
            setProducts(data)
                    }
        catch(err){
            console.log(err);
        }
    }
// 
    const search_products = async() =>{
        try{
            const res = await fetch(`http://localhost:3030/api/search?name=${search}`)
            const data = await res.json();
            setProducts(data)
                    }
        catch(err){
            console.log(err);
        }
    }
    const add_product = (e) =>{
        e.preventDefault();
        console.log(input_values);
        const fetch_data = async() =>{
            try{
            const res = await fetch('http://localhost:3030/api/products', {        //example
                method: 'POST',
                headers: {'Content-type':'application/json'},
                body:JSON.stringify(input_values)
                    })
            const data = await res.json();
            // setProducts(data);
            console.log(data);
            }

            catch(err){console.log(err)}
        }
        fetch_data();


    }

    return(
        <div>
            <h1>Shop</h1>
            <h2>Search</h2>
            <div>
                <input onChange={(e)=>setSearch(e.target.value)}/>
                <button onClick={search_products}>Search</button>
            </div>   

            {/*  */}
            <div>
                <form onSubmit={add_product}> 
                    Name: <input name="name" onChange={(e)=> setInput_values(e)}/>
                    Price: <input name="price" onChange={(e)=> setInput_values(e)}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>     
            {/*  */}
        {
            products ? products.map(item =>{
                return (
                    <div key={item.id} style={{
                                display:"inline-block",
                                padding:"20px",
                                margin:"20px",
                                border:"2px dashed black",
                                borderRadius:"30px"
                                
                                    }}>
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <Link to={`/product/${item.id}`}>Info</Link>      
                    </div>
                
                )
            }) : null

        }

        </div>
    )
}

export default Products;