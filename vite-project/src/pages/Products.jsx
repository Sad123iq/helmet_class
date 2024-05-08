import React from 'react'

const Products = () => {
    axios.get("https://fakestoreapi.com/products").then(data=>console.log(data)).catch(error => console.error('Error:', error));
  return (
    <div>Products</div>
  )
}

export default Products