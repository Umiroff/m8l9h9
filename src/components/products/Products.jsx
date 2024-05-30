import React, { useEffect, useState } from 'react'
import '../../scss/products.scss'

// import axios from 'axios'


function Products() {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
            .then((json) => {
                setData(json.products)
            });
    },[])

    let pros = data?.map(el => (
        <div key={el.id} className='pros__items__card'>
            <img src={el.images[0]} alt="" />
            <p className='pros__items__card__title'>{el.title}</p>
            <p className='pros__items__card__buy'>1 buy</p>
            <p className='pros__items__card__oldprice'>{el.price-1} UZS</p>
            <p className='pros__items__card__price'>{el.price} UZS</p>
        </div>
    ))
    
  return (
    <>
        <div className='pros'>
            <p className='pros__title'>Products</p>
            <div className='pros__items'>
                {pros}
            </div>
        </div>
    </>
  )
}

export default Products