import {useState} from 'react'

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

function FilterItems(props){
    const [searchedStr, setSearchedStr] = useState('All')
    

    function handleSelect(e){
        setSearchedStr(e.target.value)
        props.filterItems(e.target.value)

        console.log("selected", e.target.value)
    }
    return(
        <>
        <div value={searchedStr} onChange={handleSelect}>
            {/* <button value="All" className="btn" >All</button>
            <button value="Sofa" className="btn">Sofas</button>
            <button value="Bed" className="btn">Beds</button>
            <button value="Table" className="btn">Tables</button> */}
            </div>
        </>
    )
}

export default FilterItems;