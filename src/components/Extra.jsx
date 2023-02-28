import axios from "axios";
import { useEffect, useState } from "react";
import { API, urls } from "../data";
import CardItem from "./CardItem";

const Extra = () => {
  const [fetchPromise, setFetchPromise] = useState([]);
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    urls.map((singleUrl, i) => {
      let newFetch = axios.get(
        `${API}?point.lat=${singleUrl.latitude}&point.lon=${singleUrl.longitude}&size=1`
      );
      setFetchPromise((prevState) => [...prevState, newFetch]);
    });
        Promise.all([...fetchPromise])
      .then(values => {
        return Promise.all(values.map(r => r.json()))
      })
      .then((data) => setTotalData(data));
  }, [])


  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <CardItem totalData={totalData}/>
    </div>
  );
};
export default Extra;
