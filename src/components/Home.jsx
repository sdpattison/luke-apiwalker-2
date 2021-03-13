import axios from 'axios';
import { Redirect } from 'react-router';

const Home = ({result, setResult, search, setSearch, submitted, setSubmitted, error, setError }) =>{
    console.log(submitted)

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        axios.get(`https://swapi.dev/api/${search.type}/${search.id}`).then(response=>{setResult(response.data)}).catch(err =>{setError(true)});
        setSubmitted(true);
    }

    if(submitted){
        return (<Redirect to ={`/${search.type}/${search.id}`} /> );
    }
    else{
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <h1>Search Star Wars Lore</h1>
                    <form className="form-control" onSubmit = {handleSubmit}>
                        <label htmlFor="type">Search For:</label>
                        <select name="type" className="form-select mb-2" onChange={handleChange} value={search.name}>
                            <option defaultValue>Choose One</option>
                            <option value="people">People</option>
                            <option value="planets">Planets</option>
                        </select>
                        <label htmlFor="id">ID:</label>
                        <input type="number" name="id" className="form-control mb-2" onChange={handleChange} value={search.id}/>
                        <button type="submit" className="btn btn-primary mt-2">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );}
}

export default Home;