import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import FilterItems from "../components/FilterItems"
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

function WholeCatalog() {
    const [items, setItems] = useState("All")
    const [filter, setFilter] = useState("")

    useEffect(()=>{
        axios.get(`${API_URL}/api/allcatalogs/item`)
        .then((response) => {
            setItems(response.data);
          })
        .catch(err=>console.log('There is an error', err))
    })

    // function catFilter(e){
    //     if(items.category === e.target.value) {
    //         setFilter(e)
    //         console.log(e)
    //         return
    //     } else {
    //         return items
    //     }
    // }
    
    return(
        <>
        <Navbar></Navbar>
        <h1>All Items</h1>

        <FilterItems items={items}></FilterItems>
       

      
        <Footer></Footer>
        </>
    )
}

export default WholeCatalog;