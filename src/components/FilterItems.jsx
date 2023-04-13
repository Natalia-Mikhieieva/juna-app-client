import axios from 'axios';
import {useEffect, useState} from 'react'

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

function FilterItems(props){
    const [searchedStr, setSearchedStr] = useState('')

    useEffect(()=>{
        axios.get(`${API_URL}/api/items`)
    }, [searchedStr])
    

    function handleClick(e){
        // if(e.target.value === searchedStr){ 
        // setSearchedStr(e.target.value)
        // console.log(searchedStr)
        // //
        // return 
    //}
    props.filter(e.target.value)
        // props.filterItems(e.target.value)

        console.log("clicked", e.target.value)
    }
    return(
        <>
        
        <div value={searchedStr} >
            <button value="all" className="btn" onClick={handleClick}>All</button>
            <button value="sofa" className="btn" onClick={handleClick}>Sofas</button>
            <button value="bed" className="btn" onClick={handleClick}>Beds</button>
            <button value="table" className="btn" onClick={handleClick}>Tables</button>
        </div>
        </>
    )
}

export default FilterItems;