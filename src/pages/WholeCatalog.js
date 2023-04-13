import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import FilterItems from "../components/FilterItems"
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

function WholeCatalog(props) {
    const [items, setItems] = useState([])
    // const [filter, setFilter] = useState("")

    useEffect(()=>{
        axios.get(`${API_URL}/api/items`)
        .then((response) => {
            setItems(response.data);
            console.log(response.data)
          })
        .catch(err=>console.log('There is an error', err))
    }, [])

    function filter(fltr) {
        const newItems = [...items]
        if( fltr === "all"){
            axios.get(`${API_URL}/api/items`)
            .then((response) => {
                setItems(response.data);
                console.log(response.data)
              })
            .catch(err=>console.log('There is an error', err))
        } else {
        const filteredItems = newItems.filter((oneItem)=>{
            return oneItem.category === fltr
        })
        setItems(filteredItems)
    }}
    
    return(
        <>
        <Navbar></Navbar>
        <h1>All Items</h1>

        <FilterItems filter={filter}></FilterItems>
        { 
            items.map((item)=>{
            return(
                <div>
                    <p>{item.title}</p>
                </div>
            )
        })}
       

      
        <Footer></Footer>
        </>
    )
}

export default WholeCatalog;