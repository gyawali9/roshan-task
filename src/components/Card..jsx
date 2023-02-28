import axios from "axios";
import { useEffect, useState } from "react";
import { API, urls } from "../data";
import CardItem from "./CardItem";
import Loader from "./Loader";

const Card = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () =>{
      setIsLoading(true);
      try{
        const responses = await Promise.all(urls.map((singleUrl,i)=>{
          return axios.get(`${API}?point.lat=${singleUrl.latitude}&point.lon=${singleUrl.longitude}&size=1`)
        }))
        const totalData = responses.map((item)=>item.data.features)
        setData(totalData)
      } catch (error){
        setError(error)
      } finally{
        setIsLoading(false)
      }
    }
    fetchData()
    
  }, [])

  if (isLoading) {
    
    return <Loader/>
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  
console.log(data,"check")
  return (
    <>
    <CardItem totalData={data}/>   
    </>
  );
}

export default Card;
