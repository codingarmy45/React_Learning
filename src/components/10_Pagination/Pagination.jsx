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

/*
*    This is a clean and efficient implementation of client-side pagination in React. By breaking down your code into its logical phases, we can see exactly how the data flows from a raw array into a paginated UI.

Here is a detailed breakdown of how your component works:

---

## 1. Phase 1: Data Setup

```javascript
const data = Array.from({length: 53}, (_,i) => `Item ${i+1}`);

```

* **Purpose:** This creates a mock dataset to work with.
* **How it works:** `Array.from()` takes an object with a length property and a mapping function. It creates an array of 53 strings: `["Item 1", "Item 2", ..., "Item 53"]`.
* In a real-world app, this `data` would likely come from an API call or a prop.

## 2. Phase 2: Pagination Logic

This is the "brain" of your component. It calculates which subset of data should be visible based on the current state.

### Step 1: State & Configuration

* **`itemsPerPage`**: A constant that defines the "chunk" size (10 items).
* **`currentPage`**: The only piece of **state**. We start at page `1`. React will re-render the component every time this value changes.

### Step 2: Total Pages Calculation

```javascript
const totalPages = Math.ceil(data.length / itemsPerPage);

```

* **The Math:** .
* **`Math.ceil`**: We use "ceiling" because even if there is only 1 item left over (like the 3 items on your last page), it requires a full extra page. Thus,  becomes **6 total pages**.

### Step 3 & 4: Slicing the Data

To show only 10 items at a time, you calculate the "window" of the array to display.

| Page | Calculation: `(currentPage - 1) * itemsPerPage` | Start Index | End Index |
| --- | --- | --- | --- |
| **1** |  | 0 | 10 |
| **2** |  | 10 | 20 |
| **6** |  | 50 | 60 (Array ends at 53) |

* **`data.slice(startIndex, endIndex)`**: The `.slice()` method in JavaScript is **non-destructive** (it doesn't change the original array) and extracts items from the start index up to, but *not including*, the end index.

---

## 3. Phase 3: The UI (Rendering)

The `return` statement handles how the user interacts with the logic.

### The Item List

```javascript
{currentItems.map((item) => (
    <li key={item}>{item}</li>
))}

```

Instead of mapping over the huge `data` array (53 items), you only map over `currentItems` (10 items). This keeps the DOM lean and fast.

### The Controls (Navigation)

The buttons use **functional state updates** to change the page:

* **Previous Button:** Uses `Math.max(p - 1, 1)`. This is a safety check to ensure the page number never goes below 1.
* **Next Button:** Uses `Math.min(p + 1, totalPages)`. This ensures the page number never exceeds the total page count.
* **`disabled` attribute:** This is a great UX touch. It prevents the user from clicking "Previous" when on page 1 or "Next" when on the last page.

---

## Summary of Data Flow

1. **User Clicks "Next"**: `setCurrentPage` updates `currentPage` from 1 to 2.
2. **Re-render**: React detects state change and runs the function again.
3. **Recalculate**: `startIndex` becomes 10, `endIndex` becomes 20.
4. **Slice**: `currentItems` now contains "Item 11" through "Item 20".
5. **Display**: The list updates to show the new items.

---

### Suggested Improvements

While your code is logically sound, here are two small tweaks for production:

1. **Use `useEffect` for resets:** If the `data` length changes (e.g., due to a filter), you should reset `currentPage` to 1.
2. **Memoization:** If the dataset is very large (thousands of items), you could wrap the calculations in `useMemo` to prevent recalculating the slice on every unrelated re-render.

**Would you like me to show you how to add "Page Number" buttons (e.g., [1] [2] [3]...) instead of just Next/Previous?**
*/ 