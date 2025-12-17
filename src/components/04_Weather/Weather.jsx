import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const [data, setData] = useState({
    city: "",
    weather: "",
    temperature: "",
  });
  const [cityName, setCityName] = useState("");
  const fetchData = async (cityName) => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=b1df62c9852344f280e100438251712&q=${cityName}&aqi=no`
      );
      console.log(res);
      setData((prev) => ({
        ...prev,
        city: res.data.location.name,
        weather: res.data.current.condition.text,
        temperature: res.data.current.temp_c,
      }));
      setCityName("");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [cityName]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter City Name"
        onChange={(e) => setCityName(e.target.value)}
        value={cityName}
      />
      <button onClick={() => fetchData(cityName)}>Submit</button>
      <p>{data.city}</p>
      <p>{data.weather}</p>
      <p>{data.temperature}</p>
    </div>
  );
};

export default Weather;
