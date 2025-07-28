import MovieCard from '../components/MovieCard';
import { useState } from 'react';

function Home(){
    const [searchQuery, setSearchQuery] = useState('');

    const movies = [
        { id: 1, title: 'Inception', release_date: 2010 },
        { id: 2, title: 'Oppenheimer', release_date: 2023 },
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery)
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch}>
                <input className="search-input" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} type="text" placeholder='Search for movies...'/>
                <button type='submit'>Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(movie => (
                    movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;