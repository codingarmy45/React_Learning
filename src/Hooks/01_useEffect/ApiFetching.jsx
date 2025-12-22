import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiFetching = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false); // Renamed for clarity
  const [isLoading, setIsLoading] = useState(true); // Explicit loading state

  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts"); // Added .get for clarity
      setData(res.data);
      setIsError(false);
    } catch (err) {
      console.log("Error: " + err);
      setIsError(true);
    } finally {
      // 'finally' runs whether it succeeded OR failed
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 1. Handle Loading First
  if (isLoading) {
      return <h1>Loading...</h1>;
  }

  // 2. Handle Error Second
  if (isError) {
      return <h1>Error fetching data.</h1>;
  }

  // 3. Render Data (Happy Path)
  return (
    <div>
      {data.map((d) => (
        // Use the unique ID from the API, not index
        <div
          key={d.id} 
          style={{ border: "2px solid black", margin: "10px", padding: "10px" }}
        >
          <p><strong>Title:</strong> {d.title}</p>
          <p><strong>Body:</strong> {d.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ApiFetching;