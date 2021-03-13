import { Redirect } from 'react-router';


const SearchResults = ({result, setResult, search, setSearch, submitted, setSubmitted, error, setError }) =>{

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const onClick = e =>{
        setSubmitted(false);
        setError(false);
    }

    if(!submitted){
        return (<Redirect to ={"/"} /> );
    }
    else if (submitted && !error){
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <h1>Search Star Wars Lore</h1>
                    <form className="form-control">
                        <label htmlFor="type">Search For:</label>
                        <select name="type" className="form-select mb-2" onChange={handleChange} value={search.type}>
                            <option value>Choose One</option>
                            <option value="people">People</option>
                            <option value="planets">Planets</option>
                        </select>
                        <label htmlFor="id">ID:</label>
                        <input type="number" name="id" className="form-control mb-2" onChange={handleChange} value={search.id}/>
                        <button type="submit" className="btn btn-primary mt-2 disabled">Search</button>
                    </form>
                </div>
            </div>
            {search.type === "people"
            ? 
            <div className="container mt-4">
                <h2>{result.name}</h2>
                <h4>Height: {result.height} cm</h4>
                <h4>Weight: {result.mass} kg</h4>
                <h4>Hair Color: {result.hair_color}</h4> 
            </div> 
            :
            <div className="container mt-4">
                <h2>{result.name}</h2>
                <h4>Diameter: {result.diameter}</h4>
                <h4>Climate: {result.climate}</h4>
                <h4>Terrain: {result.terrain}</h4>
            </div>
            }
        <button className="btn btn-primary mt-3" onClick={onClick}>New Search</button>
        </div>
    );}
    else if(submitted && error){
        return(
            <div className="container">
                <h1>These are not the droids you are looking for...</h1>
                <img src='../../assets/images/obiwan.png' alt="I have the high ground Anakin"/> <br/>
                <button className="btn btn-primary mt-3" onClick={onClick}>New Search</button>
            </div>
        );
    }
}

export default SearchResults;