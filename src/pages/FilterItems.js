import {useState} from 'react'

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
            <button value="All">All</button>
            <button value="Sofa">Sofas</button>
            <button value="Bed">Beds</button>
            <button value="Table">Tables</button>
            </div>
        </>
    )
}

export default FilterItems;