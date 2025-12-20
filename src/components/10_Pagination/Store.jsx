import React, { useState } from 'react'
import books from './dummy'

const Store = () => {
   const itemsPerPage = 5;
   const [currentPage, setCurrentPage] = useState(1);

   const totalPages = Math.ceil(books.length / itemsPerPage);

   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;

   const currentItems = books.slice(startIndex, endIndex);

  return (
    <div>
        <h1 style={{textAlign:'center', color:'blue'}}>Yash's Store</h1>
        {currentItems && currentItems.map((d, index) => (
            <>
                <div key={index} style={{border:'1px solid black',gap:'5px', padding:'10px', margin:'5px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                    <img src={d.image} alt={d.title} style={{height:'100px'}} />
                    <p>Title: {d.title}</p>
                    <p>Author: {d.author}</p>
                    <p>Category: {d.category}</p>
                    <p>Price: {d.price}</p>
                    <button onClick={()=>alert(`${d.title} added to Cart`)}>Add To Cart</button>
                </div>
            </>
        ))} 
         <div style={{display:'flex', justifyContent:'center', gap:'5px'}}>
            <button onClick={()=>setCurrentPage((p)=> Math.max(p-1, 1))} disabled={currentPage === 1}>Previous</button>
            <span> Page {currentPage} of {totalPages} </span>
            <button onClick={()=>setCurrentPage((p)=> Math.min(p+1, totalPages))} disabled={currentPage === totalPages}>Next</button>
        </div>
    </div>
  )
}

export default Store