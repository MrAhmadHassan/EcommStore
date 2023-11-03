import './style.css'
const Search = (props)=>{
    const handleFilter = props.handleFilter;
    const handleChange = (e)=>{
        handleFilter(e.target.value);
    }
    return <>
    <div>
        <input type="text" placeholder="Search your product here" name="searchinput" id="searchinput" className="form-control" onChange={(e)=>handleChange(e)}/>
    </div>
    </>
}

export default Search;