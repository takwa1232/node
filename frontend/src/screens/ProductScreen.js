import React from 'react'
import { Link, useParams } from 'react-router-dom';
import {data} from '../data';
import Rating from '../components/Rating';

function ProductScreen(props) {
   const {id}=useParams();
    const product = data.products.find((x)=>x._id===
    Number(id));
    if (! product){
    return <div>product not found</div>;
}
 return(
    <div>
        <Link to="/">back to result</Link>
        <div className='row top'>
        <div className='col-2'> 
        <img className='large' src={product.image}  alt={product.name}></img>
        
        </div>
        <div className='col-1'> 
        <ul>
            <li>
                <h1>{product.name}</h1>
            </li>
            <li>
                <Rating rating={product.rating}
                numReviews={product.numReviews}>

                </Rating>
            </li>
            <li>
                price: ${product.price}</li>
                <li>description:
                <p>{product.description}</p>
                
                </li>
        </ul>

        
        </div>

        <div className="col-1">
        <div className='card card-body'>
        <ul>
            <li>
                <div className='row'>
                <div>Price</div>
                <div className='price'>
                ${product.price}
                </div>

                </div>
            </li>
            <li>
                <div className='row'>
                <div>Status</div>
                <div>
                    {product.countInStock > 0 ?(
                        <span className='success'>in stock</span>
                    ):
                    (
                        <span className='erreur'>indesponible</span>
                    )
                    }
                    
                </div>

                </div>
            </li>
            <li>
                <button className='primary block'> add to card</button>
            </li>
        </ul>
            
        </div>
        </div>

        </div>
    </div>
 )
}

export default ProductScreen