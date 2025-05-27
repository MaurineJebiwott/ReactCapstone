import MovieCard from "../components/MovieCard"
import {useState} from "react"

function Home() { 
   const [searchQuery, setSearchQuery] = useState("")
    const movies =[
       {id:1, title:"John wick", release_date:"2024"},
       {id:2, title:"Avatar", release_date:"2024"},
       {id:3, title:"Frozen", release_date:"2024"}
    ]
    const handleSearch = () =>{}    
    return(
        <div className= "home"> 
        <form onSubmit={handleSearch} className="search-form">
         <input type="text" placeholder="Search for movie "/>
         <button type="submit"className="search-button">Search</button>
        </form>
     <div className="movies-grid">
        {movies.map((movie => <MovieCard movie={movie} key={movie.id}/>))}
     </div>
        </div>
    )
    
}
export default Home