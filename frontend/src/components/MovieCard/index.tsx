import axios from "axios";
import MovieScore from "components/MovieScore"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie, MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props) {
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(response => {
            const data = response.data as MoviePage
            console.log(data)
            setPageNumber(data.number)
        })
    }, [])


    return(
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />

                <Link to={`/form/${movie.id}`}>
                <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
                
            </div>
        </div>
    )
}

export default MovieCard