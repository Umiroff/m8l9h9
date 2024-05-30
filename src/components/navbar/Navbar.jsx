import React, { useEffect, useState } from 'react'
import '../../scss/navbar.scss'
import { Button } from '@mui/material'

function Navbar() {
  const [data, setData] = useState(null)
  const [svalue, setSvalue] = useState('')
  
    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
            .then((json) => {
                setData(json.products)
            });
    },[])

    let handleSearch = (data) => {
      return data?.filter(title => title.title.toLowerCase().includes(svalue.toLowerCase().trim()))
    }
    
  return (
    <>
    <div className='nav'>
        <h2 className='nav__logo'>AliExpress</h2>
        <div className='nav__bars'>
            <button>Category</button>   
            <form action="">
                <input type="text" placeholder='search...' value={svalue} onChange={(e) => setSvalue(e.target.value)}/>
                <Button variant="contained" style={{background: '#b2ed50', borderRadius: 30,width: 120, height: 50, marginTop: -10}}>Search</Button>
              {
                // handleSearch(data).length() ?
                svalue.trim() ?
                <div>
                  {
                    handleSearch(data)?.map(pro => (
                      <div key={pro.id}>
                      <img src={pro.images[0]} alt="" />
                      <p>{pro.title}</p>
                    </div>
                  ))
                  }
                </div>
                :
                <></>
                // :
                // <></>
              }
            </form>
            <button>Order</button>
            <button>Cart</button>
            <button>Sign Up</button>
        </div>
    </div>
    </>
  )
}

export default Navbar