import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Items from './components/Items'
import Item from './components/Item'
// import du package axios
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://lereacteur-vinted-api.herokuapp.com/offers");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <>
      <Header />
      <Main />
      <Items>
        <Item data={data}/>
      </Items>
    </>
  )
}

export default App
