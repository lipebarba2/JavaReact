import { Link, useNavigate } from 'react-router-dom';
import './styles.css'
import { Movie } from 'types/movie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'utils/requests';

type Props = {
    movieId: string;
}

function FormCard({ movieId }: Props) {

    const navigate = useNavigate();

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                console.error("Error fetching movie:", error);
            });
    }, [movieId]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aqui você pode adicionar o código para lidar com o submit
    }

    return (
        <div className="dsmovie-form-container">
            {movie && (
                <>
                    <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
                    <div className="dsmovie-card-bottom-container">
                        <h3>{movie.title}</h3>
                        <form className="dsmovie-form" onSubmit={handleSubmit}>
                            <div className="form-group dsmovie-form-group">
                                <label htmlFor="email">Informe seu email</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            <div className="form-group dsmovie-form-group">
                                <label htmlFor="score">Informe sua avaliação</label>
                                <select className="form-control" id="score">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="dsmovie-form-btn-container">
                                <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                            </div>
                        </form>
                        <Link to='/'>
                            <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default FormCard;
