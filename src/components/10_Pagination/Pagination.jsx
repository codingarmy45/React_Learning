import React, { useState } from 'react'

const Pagination = () => {
    // * Phase 1: Data Setup
   const data = Array.from({length: 53}, (_,i) => `Item ${i+1}`);

   // * Phase 2: Pagination Logic
   // * Step 1️⃣ State & Config
   const itemsPerPage = 10;
   const [currentPage, setCurrentPage] = useState(1);
   
   // * Step 2️⃣ Calculate Total Pages
   const totalPages = Math.ceil(data.length / itemsPerPage);
   console.log("TotalPages: " + totalPages)

   // * Step 3️⃣ Calculate Index Range
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   console.log("startIndex: " + startIndex);
   console.log("endIndex:" + endIndex);

   // * Step 4️⃣ Slice the Data
   const currentItems = data.slice(startIndex, endIndex);
   console.log("currentItems:" + currentItems);

  return (
    <div>
        <h2>Pagination from Scratch</h2>

        {/* Items */}
        <ul>
            {currentItems.map((item) =>(
                <li key={item}>{item}</li>
            ))}
        </ul>

        {/* Controls */}
        <div>
            <button onClick={()=>setCurrentPage((p) => Math.max(p-1, 1))} disabled={currentPage === 1}>Previous</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={()=>setCurrentPage((p)=>Math.min(p+1, totalPages))} disabled={currentPage === totalPages}>Next</button>
        </div>
    </div>
  )
}

export default Pagination